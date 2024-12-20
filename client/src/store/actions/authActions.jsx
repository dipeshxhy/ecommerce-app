import { instance } from "@/services"
import { setUser } from "../reducers/authReducer"


export const loginUser=(user)=>async(dispatch)=>{
    try{
        const res=await instance.post("/api/auth/login",user)
        console.log(res)
        dispatch(setUser(res.data.data))
        return res

    }catch(error){
        console.log(error.response.data)
        return error.response.data
    }
}