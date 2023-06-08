// import {useEffect, useState} from "react";


// const useClass = () => {
//     const [class, setClass] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('/public/Classes.json')
//             .then(res => res.json())
//             .then(data => {
//                 setClass(data);
//                 setLoading(false);
//             });
//     }, [])

//     return [class, loading]
// };

// export default useClass;