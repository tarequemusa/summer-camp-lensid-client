import {useQuery} from "@tanstack/react-query";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

const usePaymentHistory = () => {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const {refetch, data: paymentHistory = []} = useQuery({
        queryKey: ['class', user?.email],

        queryFn: async () => {
            const res = await fetch(`https://summer-camp-lensid-server-tarequemusa.vercel.app/payments/${ user?.email }`, {
                headers: {
                    authorization: `bearer ${ token }`
                }
            })
            return res.json();
        },
    })

    return [paymentHistory, refetch]
};

export default usePaymentHistory;