import React from 'react'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assets/auth/signin.svg';
import Google from '../../assets/auth/google.svg';
import Twitter from '../../assets/auth/twitter.svg';
import Eye from '../../assets/auth/eye.svg';    

const newpassword = () => {
 

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full lg:w-1/2 ">
        <img src={SignIn} alt="Illustration" className="object-cover" />
      </div>

      {/* <div className="w-1/2 h-4/5 flex flex-col justify-around  overflow-auto py-5 px-20"> */}
      <div className="w-full lg:w-1/2  flex flex-col gap-5  py-4 px-7 lg:py-5 lg:px-15 pb-50 lg:pb-0 ">
        <div>
          <h1 className='text-2xl font-bold'>Create New Password</h1>
        <h1 className='text-sm text-gray-400'>Your new password must be different from previous used passwords</h1>
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:border-[#8A33FD]"
          />
        </div>
        <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
          
          <input
            type="email"
            id="email"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:border-[#8A33FD]"
          />
        </div>
          <button type="button" class="text-white bg-[#8A33FD] hover:bg-[#6B0FD6] font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-1/2">Reset Password</button>
       
      </div>
    </>
  )
}

export default newpassword
