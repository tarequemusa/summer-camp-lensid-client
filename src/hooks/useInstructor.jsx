import {useEffect, useState} from "react";


const useInstructor = () => {
    // const [allInstructor, setAllInstructor] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-lensid-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false);
            });
    }, [])

    return [instructors, loading]
};

export default useInstructor;