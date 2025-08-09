import React from 'react'
import { Outlet } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { PiSignOut } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";
import { PiTrolleySuitcaseDuotone } from "react-icons/pi";
import { useNavigate, useLocation } from 'react-router';

const profilelayout = () => {

     const navigate = useNavigate();
      const location = useLocation();
      const isActive = (path) => location.pathname === path;

  return (
    <div className='px-20 py-5 grid grid-cols-[1fr_4fr] gap-10'>
      <div className=' px-10 '>
        <h1 className='font-bold text-2xl py-3 '>Your Name</h1>
        <h1 className='text-sm text-gray-400'>Welcome to your Account</h1>
        <div className='flex justify-start py-5'>
            <ul className='flex flex-col gap-5 w-full'>
                <li onClick={()=>navigate("/homepage/profile/myorder")} className={`${isActive("/homepage/profile/myorder") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><CgProfile /><span className='px-3 text-lg  '> My Orders</span></li>
                <li onClick={()=>navigate("/homepage/profile/wishlist")} className={`${isActive("/homepage/profile/wishlist") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><PiSignOut /><span className='px-3 text-lg  '> Wishlist</span></li>
                <li onClick={()=>navigate("/homepage/profile")} className={`${isActive("/homepage/profile") || isActive("/homepage/profile/newaddress") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><LuHeart /><span className='px-3 text-lg  '> My Info</span></li>
                <li onClick={()=>navigate("/")} className={` flex items-center text-gray-500  hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><PiTrolleySuitcaseDuotone /><span className='px-3 text-lg '>Sign Out</span></li>
            </ul>
        </div>
      </div>
      <div className='px-10'><Outlet/></div>
    </div>
  )
}

export default profilelayout
