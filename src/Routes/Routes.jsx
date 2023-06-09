import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Components/Error/Error";
import ApprovedClasses from "../Pages/ApprovedClasses/ApprovedClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'approvedclasses',
                element: <ApprovedClasses></ApprovedClasses>
            },
            {
                path: 'allinstructors',
                element: <AllInstructor></AllInstructor>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);
