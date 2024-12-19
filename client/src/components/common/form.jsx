import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
const type={
 INPUT:"input",
    TEXTAREA:"textarea",
    SELECT:"select",
}

const CommonForm = ({formControls,formData,setFormData,btnText,onSubmit}) => {
    const renderFormElement = (control) => {
let element;
switch (control.componentType) {
    case type.INPUT:
        element = <Input type={control.type} name={control.name} placeholder={control.placeholder} value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})} />
        
      case type.TEXTAREA:
        element = <textarea name={control.name} placeholder={control.placeholder}value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})} />

        case type.SELECT:
            element=<Select value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})}>
                <SelectTrigger className="w-full">
<SelectValue placeholder={control.placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {
                        control?.options?.map((option,index)=>(
                            <div key={index}>
                                <SelectItem value={option.value}>{option.label}</SelectItem>
                            </div>
                        ))
                    }
                </SelectContent>
                </Select>

    default:
      element=<Input type={control.type} name={control.name} placeholder={control.placeholder}value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})} />
}
return element;
    }
    console.log(formControls.length)
  return (
   <form className='w-full ' onSubmit={onSubmit}>
{
   formControls && formControls.length>0? formControls.map(control=>(
       
        <div className='grid ' key={control.name}>
            <Label className="sm:text-lg text-md py-2" htmlFor={control.name}>{control.label}</Label>
            {
                renderFormElement(control)
            }
        </div>
        
        )):null
}
<Button className="w-full mt-4 " type="submit">{btnText}</Button>
   </form>

  )
}

export default CommonForm