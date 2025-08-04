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
import ProductListPage from "../pages/productlistpage/productlistpage";
import Men from '../pages/productlistpage/men';
import Women from '../pages/productlistpage/women';
import Joggers from '../pages/productlistpage/joggers';
import Combos from '../pages/productlistpage/combo';


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
        { path: "/homepage",
            element: <MainLayout/>,
            children: [
                {index:true,element:<HomePage/>},
                {path:"productlistpage",element:<ProductListPage/>,
                    children:[
                        { index: true, element: <Men /> }, 
                        { path: "women", element: <Women /> }, 
                        { path: "combos", element: <Combos /> }, 
                        { path: "joggers", element: <Joggers /> }, 
                    ]
                },
            ]
        },
    ])
    return (
        <RouterProvider router={router} />
    );
}