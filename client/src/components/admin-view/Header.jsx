import { AlignJustify, LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { asyncLogout } from '@/store/actions/authActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

const AdminHeader = ({setOpen}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {toast}=useToast()

  // const logoutHandler=async()=>{
  //  const res= await  dispatch(asyncLogout())
  //  console.log(res)
  //  if(res.data){
  //   toast({
  //     type:"success",
  //     title:res.data.message
  //   })
  //  }else{
  //   alert("Logout Failed")
  //  }
    
  
  return (
    <header className='flex w-full py-4 px-4 bg-background items-center justify-between border-b'>
<Button onClick={()=>setOpen(true)} className='lg:hidden sm:block '>

      <AlignJustify/>
      <span className='sr-only'>Toggle Menu</span>
</Button>
      <div className='flex-1 flex justify-end'>
        <Button  className="flex-inline gap-2 items-center text-sm font-medium">
          <LogOut/>
Logout
        </Button>
      </div>

    </header>
  )
}


export default AdminHeader