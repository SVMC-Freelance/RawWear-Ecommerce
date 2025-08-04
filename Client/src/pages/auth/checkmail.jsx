import React from 'react'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assets/auth/signin.svg';

const checkmail = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="w-full lg:w-1/2   ">
                <img src={SignIn} alt="Illustration" className=" object-cover" />
            </div>
            {/* <div className="w-1/2 flex flex-col gap-3  overflow-auto py-5 px-13"> */}
            <div className="w-full lg:w-1/2  flex flex-col  gap-5 lg:gap-5 py-4 px-7 lg:py-5 lg:px-15 pb-70 lg:pb-0">
                <h1 className='text-2xl font-bold'>Check Mail</h1>
                <h1>Please check your email inbox and click on the provided link to reset your password. If you don't receive email
                    <button
                        type="button"
                        className="px-2 text-[#6B0FD6] hover:text-[#6B0FD6] focus:outline-none"
                        onClick={() => navigate("")}
                    >
                        Click hear to resend
                    </button>
                </h1>
               
                <h1 className="text-sm">
                    Back to{" "}
                    <button
                        type="button"
                        className="underline hover:text-[#6B0FD6] focus:outline-none"
                        onClick={() => navigate("/")}
                    >
                        Login
                    </button>
                </h1>
            </div>
        </>
    )
}

export default checkmail
