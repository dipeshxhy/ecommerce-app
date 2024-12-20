import axios from "axios";


export const instance=axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        'Content-Type':'application/json',

    },
    withCredentials:true
})
//register
export const registerUser=async (user)=>{
    try {
        const res=await instance.post('/api/auth/register',user);
        return res;
    } catch (error) {
        return error.response.data;
    }
}

