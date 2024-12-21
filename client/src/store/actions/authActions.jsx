import { instance } from "@/services"
import { logout, setLoading, setUser } from "../reducers/authReducer"


export const loginUser=(user)=>async(dispatch)=>{
    try{
        const res=await instance.post("/api/auth/login",user,{
            withCredentials:true
        })
        dispatch(setUser(res.data.data))
        return res;

    }catch(error){
        dispatch(setUser(null))
        console.log(error.response.data)
        return error.response.data
    }
}

export const checkAuth=()=>async (dispatch)=>{
    dispatch(setLoading(true))
    try {
        const res=await instance.get('/api/auth/checkauth',{
            withCredentials:true
        });
        console.log(res)
        dispatch(setUser(res.data.user));
    } catch (error) {
    dispatch(setUser(null))
    }finally{
        dispatch(setLoading(false))
    }
}

export const asyncLogout=()=>async(dispatch)=>{
    try {
      const res=  await instance.post("/api/auth/logout",{
            withCredentials:true
        })
        dispatch(logout())
        return res;
        
    } catch (error) {
        console.log(error)
        
    }finally{
        dispatch(setLoading(false))
    }
}