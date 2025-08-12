import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../../common/breadcrums';

const cartlayout = () => {
  return (
    <>
      <Breadcrumbs padding='px-10 py-5'/>
      <Outlet/>
    </>
  )
}

export default cartlayout
