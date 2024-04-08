import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import AuthPage from "../components/AuthPage";
import MainPage from "../components/MainPage";

export const CustomeRoute = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children: [
            {
                path:'/',
                element: <AuthPage/>
            },
            {
                path:'/main',
                element: <MainPage/>

            }
        ]
    }
]);