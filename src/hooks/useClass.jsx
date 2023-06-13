import {useQuery} from "@tanstack/react-query";

const useClass = () => {
    // const [allClass, setAllClass] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/class')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllClass(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: allClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })

    return [allClass, loading, refetch]
};

export default useClass;