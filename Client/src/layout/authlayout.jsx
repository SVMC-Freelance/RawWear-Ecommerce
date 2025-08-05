
import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Logo from '../assets/auth/logo.svg';

const AuthLayout = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-200 h-screen py-5 px-41 lg:py-5 lg:px-40 overflow-scroll lg:overflow-hidden">
      <div className="  h-[calc(100vh-40px)]  flex bg-white flex-col rounded-sm ">
        <div className=" h-12 md:h-14 lg-16 xl=18 border-b-2 border-b-gray-100 flex justify-around items-center ">
          {/* header */}
          <img src={Logo} alt="" />
          <form class="h-10 hidden lg:block">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              {/* <input type="search" id="default-search" class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required /> */}
              <input
                type="search"
                id="default-search"
                class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
               focus:outline-none focus:ring-1 focus:ring-[#8A33FD] focus:border-[#8A33FD] 
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
               dark:focus:ring-[#8A33FD] dark:focus:border-[#8A33FD]"
                placeholder="Search"
                required
              />

            </div>
          </form>

          <div className=' flex items-center'>
            <button onClick={()=>{navigate("/homepage")}} type="button" class="text-white bg-[#8A33FD] hover:bg-[#6B0FD6] focus:ring-1 focus:border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2">Login</button>
            <button type="button" class="py-2.5 px-5 me-2  text-sm font-medium text-[#8A33FD] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#6B0FD6] focus:z-10 focus:ring-1 focus:border-[#8A33FD]">Sign Up</button>
          </div>

        </div>
        <div className="flex flex-1 overflow-auto lg:overflow-hidden flex-col lg:flex-row bg-white ">
          {/* <div className="w-1/2   overflow-hidden   ">
            <img src={SignIn} alt="Illustration" className="w-full object-cover" />
          </div>
          <div className="w-1/2   overflow-auto p-10">
            <Outlet />
          </div> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
