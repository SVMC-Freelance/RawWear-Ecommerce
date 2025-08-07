import React from 'react'
import filterlogo from '../../assets/productlist/filterlogo.svg'
import arrow from '../../assets/productlist/arrow.svg'
import uparrow from '../../assets/productlist/uparrow.svg'
import PriceRangeFilter from '../FilterComponents/PriceRangeFilter'
import { useState } from 'react'
import ColorFilter from '../FilterComponents/ColorFilter'
import SizeFilter from '../FilterComponents/SizeFilter'
import DressStyle from '../FilterComponents/DressStyle'


const women = () => {
  return (
    <div className='flex-col justify-around h-auto m-5 '>
      <div className='h-auto flex '>
        <div className='h-auto ml-10'>
          <div className='flex flex-col gap-6 border border-gray-300 pb-9'>
            <div className='border-b border-gray-300 h-15 flex justify-around items-center w-full'>
              <h1 className='text-xl text-gray-500 font-semibold'>Filter</h1>
              <img src={filterlogo} alt="Filter Logo" className="w-5 h-5" />
            </div>
            <div className="grid grid-cols-2 gap-3 gap-x-26 ml-12 items-center ">
              <p className='text-gray-400 '>Tops</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400 w-30 '>Printed T-shirts</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400 w-30'>Plain T-shirts</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400'>Kurti</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400'>Boxers</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400'>Joggers</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400 w-33'>Full sleeve T-shirts</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400'>Jeans</p>
              <img src={arrow} alt="no image" />
              <p className='text-gray-400'>Payjamas</p>
              <img src={arrow} alt="no image" />
            </div>
          </div>
          <div>
            <PriceRangeFilter />
          </div>

          <div>
            <ColorFilter />
          </div>
          <div>
            <SizeFilter />
          </div>
          <DressStyle />
        </div>
        <div className='h-200  w-full '>
          <div className='flex justify-between mx-5'>
            <h1 className='font-semibold text-gray-700 text-xl'>Women's Clothing</h1>
            <div className='flex gap-5'>
              <h1 className='text-purple-700 font-semibold text-xl'>New</h1>
              <h1 className='font-semibold text-gray-700 text-xl'>Recommended</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col h-full space-y-7 m-5'>
        <div className='flex gap-3'>
          <div className='border-1 rounded-3xl bg-purple-700 w-1 border-purple-700 p-0.5'></div>
          <h1 className='text-xl font-bold text-gray-800'>Clothing for Women Online in India</h1>
        </div>

        <div className='flex flex-col h-full px-5 leading-loose space-y-4'>
          <h3 className='font-semibold text-gray-500'>
            Reexplore Women's Clothing Collection Online at Euphoria
          </h3>
          <p className='text-gray-500'>
            Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India?
            Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens
            Wear Online shopping to premium quality cotton women's apparel, Euphoria has closet of Women Collection
            covered with the latest and best designs of Women's Clothing Online.
          </p>
          <p className='text-gray-500'>
            Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.
          </p>
          <h3 className='font-semibold text-gray-500'>
            One-Stop Destination to Shop Every Clothing for Women: Euphoria
          </h3>
          <p className='text-gray-500'>
            Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were
            used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is
            a comfortable outfit. Concerning this, <b>Euphoria</b> has a big fat range of Stylish Women's Clothing that would
            make her the winner wherever she goes
          </p>
          <p className='text-gray-500'>
            Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.
            It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women
            comprising the premium material and elegant design that you are always seeking for. Basically,
          </p>
          <h3 className='font-semibold text-gray-500'>See More</h3>
        </div>
      </div>

      <div >
        <div className=' h-auto p-4  text-gray-600'>
          <div className='flex gap-3'>
            <div className='border-1 rounded-3xl bg-purple-700 w-1 border-purple-700 p-0.5'></div>
            <h1 className='text-xl font-bold text-gray-800'>Buy Women's Clothings at Best Price </h1>
          </div>
          <table className="w-full max-w-4xl mx-auto  my-8 bg-gray-50 border border-gray-100 rounded-2xl border-separate border-spacing-0">
            <thead className="text-black h-30">
              <tr className="p-1">
                <th className="text-left p-4 border-b border-gray-500">Women's Clothing</th>
                <th className="text-center p-4 border-b border-l border-gray-500 w-[140px]">Best Price</th>
              </tr>
            </thead>
            <tbody className="p-2">
              {[
                ["Pick Any 4 - Women's Plain T-shirt Combo", "₹1099"],
                ["Pick Any 4 - Plain Women's Boxer Combo", "₹1099"],
                ["Pick Any 4 - Women Plain Full Sleeve T-shirt Combo", "₹1399"],
                ["Multicolor Checkered Long Casual Shirts for Women", "₹499"],
                ["Pick Any 2: Plain Boxy Casual Shirts for Women Combo", "₹799"],
                ["Blue Floral Anarkali Kurti", "₹599"],
                ["Jade Black Narrow Cut Flexible Women Jeggings", "₹998"],
                ["Mustard-yellow Solid Straight-Fit Women Pant", "₹499"],
                ["Women Pants Combo - Pick Any 2", "₹800"],
                ["Pista Green Solid Boxy Casual Shirts for Women", "₹499"],
                ["Plain Burgundy Women's Boxer", "₹349"],
                ["Striped Front Tie Casual Shirts for Women", "₹449"],
              ].map(([desc, price], index) => (
                <tr key={index}>
                  <td className="p-4">{desc}</td>
                  <td className="p-4 border-l border-gray-400 text-center w-[140px]">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default women;
