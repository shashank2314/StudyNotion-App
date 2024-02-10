import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData:null,
    loading:false,// for delay changing and signin,signup,sendotp,login... on the page of auth
    token:window.localStorage.getItem("token")?
    JSON.parse(window.localStorage.getItem("token"))
    :null,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state,value){
            state.signupData = value.payload;
        },
        setLoading(state,value){
            state.authloading = value.payload;
        },
        setToken(state,value){
            state.token = value.payload;
            localStorage.setItem("token",JSON.stringify(state.token))
        },
    }
})

export const {setLoading,setSignupData,setToken} = authSlice.actions;
export default authSlice.reducer;