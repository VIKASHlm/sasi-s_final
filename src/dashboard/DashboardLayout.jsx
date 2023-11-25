
import React from 'react'
import { Outlet } from 'react-router-dom'
// Example using absolute path
import Sidebar from 'src/dashboard/Sidebar';


const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout;
