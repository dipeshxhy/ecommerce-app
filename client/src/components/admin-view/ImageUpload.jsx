import React, { useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FileIcon, UploadCloud, XIcon } from 'lucide-react'
import { Button } from '../ui/button'

const ProductImageUpload = ({imageFile, setImageFile,uploadedImageUrl, setUploadedImageUrl}) => {

    const imageRef=useRef(null)

    const handleImageFileChange=(e)=>{
        console.log(e.target.files)
        const selectedFile=e.target.files?.[0]
        if(selectedFile){
            setImageFile(selectedFile)

        }
       
    }
    const handleDragOver=(e)=>{
        e.preventDefault()
    }
    const handleDrop=(e)=>{
        e.preventDefault()
        const droppedFile=e.dataTransfer.files?.[0]
        if(droppedFile){
            setImageFile(droppedFile)
        }
      
    }
    const handleRemoveImage=(e)=>{
        setImageFile(null)
        if(imageRef.current){
            imageRef.current.value=null
        }

    }
  return (
    <div className='max-w-md mx-auto w-full mt-4'>
    <Label className="text-lg font-semibold mb-3 block">Upload Image</Label>
    <div onDragOver={handleDragOver} onDrop={handleDrop} className='border border-dashed border-muted-foreground rounded-lg p-5 '>
        <Input id='imageupload' type="file"  ref={imageRef} className="hidden" onChange={handleImageFileChange}  /> {
            !imageFile? <Label htmlFor="imageupload" className="flex flex-col items-center justify-center cursor-pointer h-32">
                <UploadCloud className='w-10 h-10 text-muted-foreground mb-2' />
                <span className='text-sm'>Drag & Drop Or Click to upload image</span>
            </Label>:<div className='flex items-center justify-center'>
<div className='flex items-center'>
    <FileIcon className='w-8 h-8 text-primary mr-3'/>
    <p className='text-sm font-medium'>{imageFile.name}</p>
    <Button variant="ghost" className='text-muted-foreground ' size="icon" onClick={handleRemoveImage}>
        <XIcon className='w-4 h-4'/>
        <span className='sr-only'>Remove file</span>
    </Button>
</div>
            </div>
        }
    </div>
    </div>
  )
}

export default ProductImageUpload