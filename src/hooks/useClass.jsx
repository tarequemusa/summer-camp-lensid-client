import {useEffect, useState} from "react";


const useClass = () => {
    const [allClass, setAllClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setAllClass(data);
                setLoading(false);
            });
    }, [])

    return [allClass, loading]
};

export default useClass;