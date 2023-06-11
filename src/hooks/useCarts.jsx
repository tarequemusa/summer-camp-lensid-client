import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = () => {
    const {user} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${ user?.email }`)
            console.log('res from axios', res);
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCarts;