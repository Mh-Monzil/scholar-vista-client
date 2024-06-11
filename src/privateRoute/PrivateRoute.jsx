import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";
import useUser from "../hooks/useUser";


const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    const [role, isLoading] = useUser();


    if(loading || !role){
        return <div className="h-screen flex items-center justify-center">
            <ScaleLoader height={30} width={3} color="#F2A227" />
        </div>
    }
    
    if(!user){
        console.log(user);
        return <Navigate to='/login' state={location.pathname} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;