import {useQuery} from "@tanstack/react-query";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

const useMyAddedClass = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const {refetch, data: addedClass = []} = useQuery({
        queryKey: ['class', user?.email],

        queryFn: async () => {
            const res = await fetch(`https://summer-camp-lensid-server-tarequemusa.vercel.app/class/${ user?.email }`, {
                headers: {
                    authorization: `bearer ${ token }`
                }
            })
            return res.json();
        },
    })

    return [addedClass, refetch]
};

export default useMyAddedClass;