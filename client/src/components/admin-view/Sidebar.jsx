import {  ChartNoAxesCombined ,LayoutDashboardIcon,ListOrderedIcon, Package } from "lucide-react"

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
const menuSidebarMenuItems = [
  {
      id:"dashboard",
      label: "Dashboard",
      icon: <LayoutDashboardIcon/>,
      path: "/admin/dashboard",
  },
  {
      id:"products",
      label: "Products",
      icon: <Package/>,
      path: "/admin/products",
  },{
      id:"orders",
      label: "Orders",
      icon: <ListOrderedIcon/>,
      path: "/admin/orders",
  }
]

const MenuItems=()=>{
  const navigate=useNavigate()

  return <nav className='flex flex-col mt-8 gap-2  '>
    {
      menuSidebarMenuItems.map((item)=>{
        return <div key={item.id} className='flex hover:text-rose-600 rounded-md transition-all duration-200 hover:bg-lightning-yellow-300 p-3 items-center gap-2  cursor-pointer' onClick={()=>navigate(item.path)}>
          {item.icon}
          <h1 className='text-lg font-semibold'>{item.label}</h1>
        </div>
      })
    }
  </nav>
}

const AdminSidebar = ({open,setOpen}) => {
  const navigate=useNavigate()
  return (
    <>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64 bg-background">
        <div className=" h-full">
          <SheetHeader className={"border-b"}>
            <SheetTitle className='flex items-center gap-2 cursor-pointer' onClick={()=>navigate("/admin/dashboard")}>
              <ChartNoAxesCombined/>
              <h1 className='text-md font-extrabold'>Admin Panel</h1>
            </SheetTitle>
          </SheetHeader>

<MenuItems/>
        </div>

      </SheetContent>
    </Sheet>
    
    <aside className='hidden lg:flex flex-col w-64 bg-background border-r p-6'>
      <div onClick={()=>navigate("/admin/dashboard")} className='flex items-center gap-2 cursor-pointer'>
        <ChartNoAxesCombined/>
        <h1 className='text-lg font-extrabold'>Admin Panel</h1>

      </div>
      
     <MenuItems/>
      
    </aside>

    </>
  )
}

export default AdminSidebar