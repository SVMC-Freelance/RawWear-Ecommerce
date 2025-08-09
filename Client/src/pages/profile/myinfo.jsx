import React from 'react'
import { useNavigate } from 'react-router-dom'

const myinfo = () => {
    const navigate=useNavigate();
  return (
    <div className='py-3 flex flex-col gap-5'>
      <div>
        <h1 className='font-bold text-2xl'>My Info</h1>
        <h1 className='font-bold text-lg'>Contact Details</h1>
        <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-400'>Your Name</h1>
                <h1 >Chandra Mouli</h1>
            </div>
            <button>Change</button>
        </div>
        <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-400'>Email Address</h1>
                <h1 >chandramouli2k2@gmail.com</h1>
            </div>
            <button>Change</button>
        </div>
        <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-400'>Phone Number</h1>
                <h1 >8954256921</h1>
            </div>
            <button>Change</button>
        </div>
        <div className='border-b border-gray-200  py-3 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-400'>Password</h1>
                <h1 className='font-bold text-2xl'>........</h1>
            </div>
            <button>Change</button>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>Address</h1>
            <button onClick={()=>{navigate("/homepage/profile/newaddress")}} className='text-gray-400 px-3 py-1 bg-gray-200 rounded hover:text-black'>Add New</button>
        </div>
        <div>
            new cards
        </div>
      </div>
    </div>
  )
}

export default myinfo
