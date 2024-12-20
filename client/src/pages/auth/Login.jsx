import CommonForm from '@/components/common/form'
import { useToast } from '@/hooks/use-toast'
import { loginUser } from '@/store/actions/authActions'
import { loginFormControls } from '@/utils/formControl'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const loginData={
  email:"",
  password:"",

}
const AuthLogin = () => {
    const [formData,setFormData]=useState(loginData)
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const {toast}=useToast()
    const onSubmit= async(e)=>{
      e.preventDefault();
      try {
        const response = await dispatch(loginUser(formData))
        if (response?.data?.data) {
  console.log(response.data)
  localStorage.setItem("token",response.data.token)
  localStorage.setItem("role",response.data.data.role)
          toast({
            title: "Success",
            description: "Logged in successfully"
          })
          // navigate('/')
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: response?.message || "Login failed"
          })
        }
      } catch(error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong"
        })
        console.log(error)
      }
    }
    
    
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">
        Welcome Back
      </h1>
      <div>
        <CommonForm
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        btnText="Login"
        onSubmit={onSubmit}

        />
      </div>
      <p>
        Don't have an account? <Link to="/auth/register" className="ml-2 hover:underline text-blue-500 text-md">Create an account</Link>
      </p>
    </div>
  )
}


export default AuthLogin