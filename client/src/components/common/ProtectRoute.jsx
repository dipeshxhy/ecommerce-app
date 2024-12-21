import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectRoute = ({isAuthenticated,user,children,loading}) => {
    const location=useLocation()
    console.log(isAuthenticated,user)
    if (loading) {
        return (
          <div className="h-screen w-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        );
      }
 
    if(!isAuthenticated  && !(location.pathname.includes("/login") || location.pathname.includes("/register") || location.pathname.includes("/"))){
        return <Navigate to="/auth/login" />
    }
    if(isAuthenticated && user && (location.pathname.includes("/login") || location.pathname.includes("/register"))){
       if(user.role==="admin"){
           return <Navigate to="/admin/dashboard" />
       }else{
              return <Navigate to="/shopping/home" />
       }
    }
    if(isAuthenticated && user && location.pathname.includes("/admin") && user.role!=="admin"){
        return <Navigate to="/noaccess" />
    }
    if(isAuthenticated && user && location.pathname.includes("/shopping") && user.role==="admin"){
        return <Navigate to="/admin/dashboard" />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectRoute