import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
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
        break
      case type.TEXTAREA:
        element = <Textarea name={control.name} placeholder={control.placeholder}value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})} />
break;
        case type.SELECT:
            element=<Select value={formData[control.name]} onValueChange={(value)=>setFormData({...formData,[control.name]:value})}>
                <SelectTrigger className="w-full">
<SelectValue placeholder={control.placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup label={control.label}>
                    {
                     control?.options?.length>0?   control?.options.map((option)=>(
                            <div key={option.value}>
                                <SelectItem value={option.value}>{option.label}</SelectItem>
                            </div>
                        )):null
                    }
                    </SelectGroup>
                </SelectContent>
                </Select>
break;
    default:
      element=<Input type={control.type} name={control.name} placeholder={control.placeholder}value={formData[control.name]} onChange={(e)=>setFormData({...formData,[control.name]:e.target.value})} />
}
return element;
    }
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