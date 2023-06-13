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
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";



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
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledclasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myclass',
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            }
        ]
    }
]);
