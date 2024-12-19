import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/utils/formControl";
import React, { useState } from "react";

const initialState={
  fullName:"",
  email:"",
  password:"",

}
const AuthRegister = () => {
  const [formData,setFormData]=useState(initialState)

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">
        Welcome Here
      </h1>
      <div>
        <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        btnText="Register"
        onSubmit={onSubmit}

        />
      </div>
    </div>
  ); 
};

export default AuthRegister;
