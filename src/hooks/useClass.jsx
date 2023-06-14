import {useQuery} from "@tanstack/react-query";

const useClass = () => {

    const {data: allClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-lensid-server-tarequemusa.vercel.app/class');
            return res.json();
        }
    })

    return [allClass, loading, refetch]
};

export default useClass;