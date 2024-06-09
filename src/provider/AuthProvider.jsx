import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.init";
import UseAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";

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
        setLoading(false);
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    // Get token from server
  const getToken = async email => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    )
    return data
  }

  const saveUser = async user => {
    const currentUser = {
        name: user?.displayName,
      email: user?.email,
      image_url: user?.photoURL,
      role: 'user',
      status: 'Verified',
    }
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/users`, currentUser)
    console.log(data);
    return data;
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(currentUser);
      if (currentUser) {
        getToken(currentUser.email)
        saveUser(currentUser);
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

    const authInfo = {user, loading, setLoading, createUser, loginUser,signInWithGoogle, logOut, updateUserProfile,setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;