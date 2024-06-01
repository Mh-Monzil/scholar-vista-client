import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
import UseAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiosPublic = UseAxiosPublic();
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = async () => {
        setLoading(true);
        const {data} = await axiosPublic('/logout');
        console.log(data);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        // console.log(res.data.token);
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
            }else{
                //do something
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        return () => unsubscribe();
    }, [axiosPublic])

    const authInfo = {user, loading, setLoading, createUser, loginUser,signInWithGoogle, logOut, updateUserProfile,setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;