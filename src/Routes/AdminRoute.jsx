import { Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'
import ScaleLoader from "react-spinners/ScaleLoader";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useUser();

  if (isLoading) return <ScaleLoader height={30} width={3} color="#F2A227" />;
  if (role === 'admin') return children;
  return <Navigate to='/dashboard' />;
}


export default AdminRoute;

