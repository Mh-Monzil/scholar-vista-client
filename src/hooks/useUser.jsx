
import UseAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './useAuth';

const useUser = () => {
    const {user} = UseAuth();
    const axiosPublic = UseAxiosPublic();
    
    const { data: users = {}, isLoading } = useQuery({
        queryKey: ["scholarships-details"],
        queryFn: async () => {
          const { data } = await axiosPublic.get(`/users-role/${user?.email}`);
          console.log(data);
          return data;
        },
      });
    
    return users;
}
export default useUser;