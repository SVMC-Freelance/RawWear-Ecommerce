import React from 'react'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assets/auth/signin.svg';

const resetpassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className=" w-full lg:w-1/2">
                <img src={SignIn} alt="Illustration" className=" object-cover" />
            </div>
            {/* <div className="w-1/2 flex flex-col justify-between  overflow-auto py-5 px-20"> */}
            <div className="w-full lg:w-1/2  flex flex-col  gap-5 lg:gap-5 py-4 px-7 lg:py-5 lg:px-15 pb-50 lg:pb-0">
                <div>
                    <h1 className='text-2xl font-bold'>Reset Your Password</h1>
                <h1 className='text-sm text-gray-400'>Enter your Email and we'll send you a link to reset your password.</h1>
                <h1 className='text-sm text-gray-400'>Please check it</h1>
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#8A33FD] focus:border-[#8A33FD]"
                    />
                </div>

               <div>
                 <button onClick={() => navigate("/checkmail")} type="button" class="text-white bg-[#8A33FD] hover:bg-[#6B0FD6] focus:ring-1 font-medium rounded-lg text-sm px-13 py-2 ">Send</button>

                <h1 className="text-sm">
                    Back to{" "}
                    <button
                        type="button"
                        className="underline  hover:text-[#6B0FD6] focus:outline-none"
                        onClick={() => navigate("/")}
                    >
                        Login
                    </button>
                </h1>
               </div>
            </div>
        </>
    )
}

export default resetpassword
