import { instance } from "@/services"
import { setLoading, setUser } from "../reducers/authReducer"


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