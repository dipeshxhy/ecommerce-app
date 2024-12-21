import React, { useState } from 'react'
import AdminSidebar from './Sidebar'
import AdminHeader from './Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='w-full h-screen flex'>
<AdminSidebar open={openSideBar} setOpen={setOpenSideBar} />
<div className='w-full'>
    <AdminHeader setOpen={setOpenSideBar}/>
    <main>
        <Outlet/>
    </main>
</div>
    </div>
  )
}

export default AdminLayout