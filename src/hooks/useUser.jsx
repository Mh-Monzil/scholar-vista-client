
import UseAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './useAuth';
import { useEffect, useState } from 'react';

const useUser = () => {
    const {user} = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
    fetchUser();
    }, [user]);

    const fetchUser = async () => {
      const { data } = await axiosPublic.get(`/users-role/${user?.email}`);
      setUserRole(data)
    }
    
    return userRole.role;
}
export default useUser;