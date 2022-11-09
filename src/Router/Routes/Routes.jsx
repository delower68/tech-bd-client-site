import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceCard from "../../Pages/Services/ServiceCard";
import Services from "../../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        errorElement: <ErrorPage/> ,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/services',
                element:<Services/>
            },
        ]
    }
])
