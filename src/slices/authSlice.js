import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    SignupData:localStorage.getItem("SignupData")?JSON.parse(localStorage.getItem("SignupData")):null,
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
    loading:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
       setToken(state,value){
         state.token=value.payload;
       },
       setloading(state,value){
        state.loading=value.payload;
       },
       setSignupData(state,value){
        state.SignupData=value.payload;
       }
    },
});

export const {setToken,setloading,setSignupData}=authSlice.actions;
export default authSlice.reducer;