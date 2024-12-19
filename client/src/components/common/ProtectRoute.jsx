import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectRoute = ({isAuthenticted,user,children}) => {
    const location=useLocation()
    if(!isAuthenticted && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
        return <Navigate to="/login" />
    }
    if(isAuthenticted && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
       if(user && user.role==="admin"){
           return <Navigate to="/admin/dashboard" />
       }else{
              return <Navigate to="/shopping/home" />
       }
    }
    if(isAuthenticted && location.pathname.includes("/admin") && user.role!=="admin"){
        return <Navigate to="/noaccess" />
    }
    if(isAuthenticted && location.pathname.includes("/shopping") && user.role==="admin"){
        return <Navigate to="/admin/dashboard" />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectRoute