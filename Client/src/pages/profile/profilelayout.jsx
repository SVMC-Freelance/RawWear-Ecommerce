// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { CgProfile } from "react-icons/cg";
// import { PiSignOut } from "react-icons/pi";
// import { LuHeart } from "react-icons/lu";
// import { PiTrolleySuitcaseDuotone } from "react-icons/pi";
// import { useNavigate, useLocation } from 'react-router';
// import { GoHomeFill } from "react-icons/go";

// const profilelayout = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className='px-20 py-5'>
//      <nav className=" text-gray-600 flex items-center space-x-2 px-10 " aria-label="Breadcrumb">
//         <GoHomeFill />
//         <button
//           onClick={() => navigate('/homepage')}
//           className=""
//         >
//           Home
//         </button>
//         <span>/</span>
//         <button
//           onClick={() => navigate('/homepage/cart')}
//           className=""
//         >
//           Profile
//         </button>
//         <span>/</span>
//         <span className="text-gray-800 font-medium">My Info</span>
//      </nav>
//     <div className=' grid grid-cols-[1fr_4fr] gap-10'>
     
//       <div className=' px-10 '>
//         <h1 className='font-bold text-2xl py-3 '>Your Name</h1>
//         <h1 className='text-sm text-gray-400'>Welcome to your Account</h1>
//         <div className='flex justify-start py-5'>
//           <ul className='flex flex-col gap-5 w-full'>
//             <li onClick={() => navigate("/homepage/profile/myorder")} className={`${isActive("/homepage/profile/myorder") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><CgProfile /><span className='px-3 text-lg  '> My Orders</span></li>
//             <li onClick={() => navigate("/homepage/profile/wishlist")} className={`${isActive("/homepage/profile/wishlist") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><PiSignOut /><span className='px-3 text-lg  '> Wishlist</span></li>
//             <li onClick={() => navigate("/homepage/profile")} className={`${isActive("/homepage/profile") || isActive("/homepage/profile/newaddress") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center   hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><LuHeart /><span className='px-3 text-lg  '> My Info</span></li>
//             <li onClick={() => navigate("/")} className={` flex items-center text-gray-500  hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}><PiTrolleySuitcaseDuotone /><span className='px-3 text-lg '>Sign Out</span></li>
//           </ul>
//         </div>
//       </div>
//       <div className='px-10'><Outlet /></div>
//     </div>
//     </div>
//   )
// }

// export default profilelayout


import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { PiSignOut } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";
import { PiTrolleySuitcaseDuotone } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import Breadcrumbs from '../../common/breadcrums';


const ProfileLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;


  return (
    <div className='px-20 pb-5 '>
      <Breadcrumbs/>
      <div className='grid grid-cols-[1fr_4fr] gap-10  '>
        <div className='px-10'>
          <h1 className='font-bold text-2xl py-3'>Your Name</h1>
          <h1 className='text-sm text-gray-400'>Welcome to your Account</h1>
          <div className='flex justify-start py-5'>
            <ul className='flex flex-col gap-5 w-full'>
              <li onClick={() => navigate("/homepage/profile/myorder")} className={`${isActive("/homepage/profile/myorder") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}>
                <CgProfile /><span className='px-3 text-lg'>My Orders</span>
              </li>
              <li onClick={() => navigate("/homepage/profile/wishlist")} className={`${isActive("/homepage/profile/wishlist") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}>
                <PiSignOut /><span className='px-3 text-lg'>Wishlist</span>
              </li>
              <li onClick={() => navigate("/homepage/profile")} className={`${isActive("/homepage/profile") || isActive("/homepage/profile/newaddress") ? "bg-gray-200 text-black" : " text-gray-500"} flex items-center hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm`}>
                <LuHeart /><span className='px-3 text-lg'>My Info</span>
              </li>
              <li onClick={() => navigate("/")} className="flex items-center text-gray-500 hover:text-black cursor-pointer hover:bg-gray-200 w-full px-2 py-1 rounded-sm">
                <PiTrolleySuitcaseDuotone /><span className='px-3 text-lg'>Sign Out</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='px-10'><Outlet /></div>
      </div>
    </div>
  )
}

export default ProfileLayout;
