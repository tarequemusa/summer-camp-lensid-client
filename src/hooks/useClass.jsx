import {useEffect, useState} from "react";


const useClass = () => {
    const [allClass, setAllClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/public/Classes.json')
            .then(res => res.json())
            .then(data => {
                setAllClass(data);
                setLoading(false);
            });
    }, [])

    return [allClass, loading]
};

export default useClass;