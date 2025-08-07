

import React from 'react';
import Logo from '../assets/auth/logo.svg';
import { Outlet } from 'react-router';
import FooterIcon from '../assets/footer/footericon.svg';
import FooterIcons from '../assets/footer/footericons.svg';
import Cart from '../assets/header/cart.svg';
import Profile from '../assets/header/profile.svg';
import Heart from '../assets/header/heart.svg';
import { useNavigate, useLocation } from 'react-router';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className='h-screen flex flex-col'>
      <nav className='fixed top-0 w-full bg-white shadow z-10 px-5 py-3  border-b-gray-400 flex justify-around items-center'>
        <div><img src={Logo} alt="" />  </div>
        <div>
          <ul className='flex gap-6 cursor-pointer  '>
            <li onClick={() => navigate("/homepage")} className={`${isActive("/homepage") ? "text-[#8A33FD]" : "text-gray-400"} hover:text-black`}>
              Shop
            </li>
            <li
              onClick={() => navigate("/homepage/productlistpage")}
              className={`${isActive("/homepage/productlistpage") ? "text-[#8A33FD]" : "text-gray-400"} hover:text-black`}
            >
              Men
            </li>
            <li
              onClick={() => navigate("/homepage/productlistpage/women")}
              className={`${isActive("/homepage/productlistpage/women") ? "text-[#8A33FD]" : "text-gray-400"} hover:text-black`}
            >
              Women
            </li>
            <li
              onClick={() => navigate("/homepage/productlistpage/combos")}
              className={`${isActive("/homepage/productlistpage/combos") ? "text-[#8A33FD]" : "text-gray-400"} hover:text-black`}
            >
              Combos
            </li>
            <li
              onClick={() => navigate("/homepage/productlistpage/joggers")}
              className={`${isActive("/homepage/productlistpage/joggers") ? "text-[#8A33FD]" : "text-gray-400"} hover:text-black`}
            >
              Jogers
            </li>
          </ul>
        </div>
        <div>
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
        </div>
        <div className='flex gap-3'>
          <img className='w-10 h-10' src={Heart} alt="" />
          <img onClick={() => { navigate("/") }} className='w-10 h-10' src={Profile} alt="" />
          <img onClick={() => navigate("/homepage/cart")} className={` w-10 h-10`} src={Cart} alt="" />
        </div>
      </nav>
      <main className='flex-1 pt-17'>
        <Outlet />
      </main>
      <footer className='bg-[#3C4242] py-10 px-20 flex flex-col gap-3'>
        <div className='grid grid-cols-[2fr_2fr_2fr_3fr]   font-bold text-2xl text-white'>
          <h1>Need Help</h1>
          <h1>Company</h1>
          <h1>More Info</h1>
          <h1>Location</h1>
        </div>
        <div className='grid grid-cols-[2fr_2fr_2fr_3fr]   pt-2 text-white gap-x-1 gap-y-3'>
          <h1 className='text-sm '>Contact Us</h1>
          <h1 className='text-sm'>About Us</h1>
          <h1 className='text-sm'>Term and Condition</h1>
          <h1 className='text-sm'>support@euphoria.in</h1>
          <h1 className='text-sm'>Track Order</h1>
          <h1 className='text-sm'>Euphoria Blog</h1>
          <h1 className='text-sm'>Privacy Policy</h1>
          <h1 className='text-sm'>Eklingpura Chouraha, Ahmedabad Main Road</h1>
          <h1 className='text-sm'>Returns & Refunds</h1>
          <h1 className='text-sm'>euphoriastan</h1>
          <h1 className='text-sm'>Shipping Policy</h1>
          <h1 className='text-sm'>(NH 8-near mahadev hotel) Udaipur,India-313200</h1>
          <h1 className='text-sm'>FAQ's</h1>
          <h1 className='text-sm'>Collabration</h1>
          <h1 className='text-sm'>Sitemap</h1>
          <h1 className='text-sm'>Career</h1>
          <h1 className='text-sm'>Media</h1>
        </div>
        <div className='flex justify-between'>
          <img src={FooterIcon} alt="" />
          <img src={FooterIcons} alt="" />
        </div>
        <div className='flex  w-full  text-white'>
          <p className='mx-auto'>Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

