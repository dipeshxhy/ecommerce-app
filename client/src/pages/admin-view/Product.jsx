import ProductImageUpload from '@/components/admin-view/ImageUpload'
import CommonForm from '@/components/common/form'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { productFormControls } from '@/utils/formControl'
import React, { Fragment, useState } from 'react'
const initialFormData={
  image:null,
  title:"",
  price:"",
  description:"",
  category:"",
  totalstock:"",
  brand:"",
  salesPrice:"",

}

const AdminProduct = () => {
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
const onSubmit=(e)=>{
  e.preventDefault()
  console.log(formData)
}

  return (
    <>
    <div className='w-full px-3 flex my-5 justify-end'>
      <Button onClick={()=>setOpenCreateProductDialog(true)} className='bg-primary text-white'>Add Product</Button>

    </div>
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'></div>
    <Sheet open={openCreateProductDialog} onOpenChange={()=>setOpenCreateProductDialog(false)}>
<SheetContent side="right" className=" overflow-auto bg-background">
<SheetHeader>
  <SheetTitle>Add New Product</SheetTitle>
</SheetHeader>
<ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}  />
<div className='p-5'>
  <CommonForm formData={formData} setFormData={setFormData}
  formControls={productFormControls}
  btnText={"Add Product"}
  onSubmit={onSubmit}
  />
</div>
    </SheetContent>
    </Sheet>
    </>
  )
}

export default AdminProduct