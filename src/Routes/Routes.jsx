import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Components/Error/Error";
import ApprovedClasses from "../Pages/ApprovedClasses/ApprovedClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import Login from "../Pages/Login/Login";
import UserSignUp from "../Pages/UserSignUp/UserSignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


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
            },
            {
                path: 'signup',
                element: <UserSignUp></UserSignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes><Secret /></PrivateRoutes>
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);
