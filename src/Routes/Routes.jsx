import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Components/Error/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);
