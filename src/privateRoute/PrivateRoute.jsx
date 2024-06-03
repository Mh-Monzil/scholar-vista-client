import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";


const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center items-center">
            <ScaleLoader height={30} width={3} color="#36d7b7" />
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