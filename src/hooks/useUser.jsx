
import UseAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './useAuth';
import { useEffect, useState } from 'react';

const useUser = () => {
    const {user} = UseAuth();
    const axiosPublic = UseAxiosPublic();

    const {data: role = {}, isLoading} = useQuery({
      queryKey: ['role', user?.email],
      queryFn: async () => {
        const { data } = await axiosPublic.get(`/users-role/${user?.email}`);
        console.log(data.role);
        return data.role;
      }
    })
    
    return [role, isLoading ];
}
export default useUser;