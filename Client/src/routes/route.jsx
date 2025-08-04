import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/authlayout";
import SignIn from "../pages/auth/signin";
import SignUp from "../pages/auth/signup";
import Verification from "../pages/auth/verification";
import ResetPassword from "../pages/auth/resetpassword";
import CheckMail from "../pages/auth/checkmail";
import NewPassword from "../pages/auth/newpassword";
import MainLayout from "../layout/mainlayout";
import HomePage from "../pages/homepage";


export const RouteApp = ()=> {
    const router = createBrowserRouter([
        { path: "/",
            element: <AuthLayout />, 
            children: [
                { index: true, element: <SignIn /> },
                { path: "/signup", element: <SignUp /> },
                { path: "/resetpassword", element: <ResetPassword /> },
                { path: "/checkmail", element: <CheckMail /> },
                { path: "/verification", element: <Verification /> },
                { path: "/newpassword", element: <NewPassword /> },
                {path:'*', element:<Navigate to="/signup" />},    
            ],
        },
        { path: "/",
            element: <MainLayout/>,
            children: [
                {path:"/speedometer",element:<HomePage/>},
            ]
        },
    ])
    return (
        <RouterProvider router={router} />
    );
}