import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isAuthenticated:false,
    user: null,
    loading:false,
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
    
        setUser:(state,action)=>{
            state.user=action.payload
            state.isAuthenticated=true
        },
        logout:(state)=>{
            state.user=null
            state.isAuthenticated=false
        }
    }
})
export const {setUser,action}=authSlice.actions
export default authSlice.reducer