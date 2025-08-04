import React ,{useState}from 'react'
import Google from '../../assets/auth/google.svg';
import Twitter from '../../assets/auth/twitter.svg';
import Eye from '../../assets/auth/eye.svg';
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io"; 
import SignIn from '../../assets/auth/signin.svg';

const signup = () => {

  const navigate = useNavigate();
    const[eye,setEye]=useState(true);
  return (
    <>  

      <div className="w-full   lg:w-1/2  ">
        <img src={SignIn} alt="Illustration" className=" object-cover" />
      </div>


      {/* <div className="w-1/2 flex flex-col justify-between  overflow-auto py-5 px-20"> */}
      <div className="w-full lg:w-1/2  flex flex-col justify-around gap-5 lg:gap-0 py-4 px-7 lg:py-5 lg:px-15   pb-50 lg:pb-0"> 
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-bold'>Sign Up</h1>
        <button className="flex text-[#8A33FD] items-center justify-center gap-2 border  border-gray-400 rounded-sm w-full py-2 focus:ring-1 focus:border-[#8A33FD]">
          <img src={Google} alt="Google" className="w-5 h-5" />
          Continue with Google</button>
        <button className="flex text-[#8A33FD] items-center justify-center gap-2 border border-gray-400 rounded-sm w-full py-2 focus:ring-1 focus:border-[#8A33FD]">
          <img src={Twitter} alt="Twitter" className="w-5 h-5" />
          Continue with Twitter
        </button>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:border-[#8A33FD]"
          />
        </div>
        <div className="w-full">
          <div className='flex w-full justify-between'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              password
            </label>
            { eye ? <button onClick={()=>setEye(!eye)}  className=' text-[12px] flex justify-between items-center w-10'>
                          <img src={Eye} alt="Twitter" className="w-3 h-3" />Hide</button>:
                          <button onClick={()=>setEye(!eye)}  className='text-[12px] flex justify-between items-center w-15'>
                          <IoMdEye className="text-gray-500" />Un Hide</button>}
          </div>

          <input
            type="email"
            id="email"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:border-[#8A33FD]"
          />

          
        </div>
        <div>
          <button type="button" class="text-white bg-[#8A33FD] hover:bg-[#6B0FD6] focus:ring-1 font-medium rounded-lg text-sm px-13 py-2">Sign Up</button>
        <h1 className="text-sm">
          Already have an account?{" "}
          <button
            type="button"
            className="underline hover:text-[#6B0FD6] focus:outline-none"
            onClick={() => navigate("/")}
          >
            Log in
          </button>
        </h1>
        </div>
      </div>
    </>
  )
}

export default signup
