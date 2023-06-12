
import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructorDash from "../hooks/useInstructorDash";


const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructorDash();
    const location = useLocation();

    if(loading || isInstructorLoading) {
        return <progress className="progress w-56 flex items-center justify-center"></progress>
    }

    if(user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;