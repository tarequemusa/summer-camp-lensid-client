import {useEffect, useState} from "react";


const useClass = () => {
    const [allClass, setAllClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-lensid-server.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setAllClass(data);
                setLoading(false);
            });
    }, [])

    return [allClass, loading]
};

export default useClass;