import CommonForm from "@/components/common/form";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/services";
import { registerFormControls } from "@/utils/formControl";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const registerData={
  userName:"",
  email:"",
  password:"",

}
const AuthRegister = () => {
  const [formData,setFormData]=useState(registerData)
  
  const navigate=useNavigate()
const {toast}=useToast()
  const onSubmit=async(e)=>{
    e.preventDefault();
   

    try {
      const {data,message}=await registerUser(formData);
      console.log(data)
     if(data ){
      toast({
        type:"success",
        title:data.message
      })

      setFormData(registerData)
      navigate("/auth/login")

    }else{
      toast({
        type:"error",
        title:message
    })
  }
    }catch(error){
     
       console.log(error)
    
    
  } 
    
  }
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">
        Welcome Here ! Create an Account
      </h1>
      <div>
        <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        btnText="Creata an Account"
        onSubmit={onSubmit}

        />
      </div>
      <p className="text-center mt-4">
        Already have an account? <Link className="ml-2 hover:underline text-blue-500 text-md" to="/auth/login">Login</Link>

      </p>
    </div>
  ); 
};

export default AuthRegister;
