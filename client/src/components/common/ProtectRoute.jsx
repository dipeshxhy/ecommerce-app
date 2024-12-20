import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectRoute = ({isAuthenticated,user,children}) => {
    const location=useLocation()
   
 
    if(!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
        return <Navigate to="/auth/login" />
    }
    if(isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
       if(user.role==="admin"){
           return <Navigate to="/admin/dashboard" />
       }else{
              return <Navigate to="/shopping/home" />
       }
    }
    if(isAuthenticated && location.pathname.includes("/admin") && user.role!=="admin"){
        return <Navigate to="/noaccess" />
    }
    if(isAuthenticated && location.pathname.includes("/shopping") && user.role==="admin"){
        return <Navigate to="/admin/dashboard" />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectRoute