import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectRoute = ({isAuthenticted,user,children}) => {
    const location=useLocation()
const token=localStorage.getItem("token")
const role=localStorage.getItem("role")
if(!token){
    return <Navigate to="/auth/login" />

}   
   
 
    if(!token && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
        return <Navigate to="/auth/login" />
    }
    if(token && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
       if(user && user.role==="admin"){
           return <Navigate to="/admin/dashboard" />
       }else{
              return <Navigate to="/shopping/home" />
       }
    }
    if(token && location.pathname.includes("/admin") && role!=="admin"){
        return <Navigate to="/noaccess" />
    }
    if(token && location.pathname.includes("/shopping") && role==="admin"){
        return <Navigate to="/admin/dashboard" />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectRoute