import React from 'react'
import { Outlet } from 'react-router-dom'

const productlistpage = () => {
  return (
    <div className='flex p-10 border gap-5'>
      {/* <div className='border flex-1'>filters</div> */}
      <div className=' flex-2'><Outlet/></div>
    </div>
  )
}

export default productlistpage
