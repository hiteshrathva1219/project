import { toast } from 'react-toastify';
import { apiConnector } from "../apiconnector"
import {endpoints} from "../apis"
import { setloading,setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";


// import { get } from "react-hook-form";

const {
    LOGIN_API,
    RESETPASSTOKEN_API,
    SIGNUP_API,
    SENDOTP_API,
    RESETPASSWORD_API,
}=endpoints;


export function sendOtp(email,navigate){
    return async(dispatch)=>{
        const toastId=toast.loading("Loading...")
        dispatch(setloading(true))
        try{
           const response = await apiConnector("POST",SENDOTP_API,{email,}); 
           if(!response.data.success){
            throw new Error(response.data.message);
           }

           toast.success("OTP Sent Successfully");
           console.log("OTP Sent")
           navigate("/verify-email");
        } 
        catch(error){
           console.log("Error while sending OTP");
           toast.error("Failed to Send OTP");
        }
        dispatch(setloading(false));
        toast.dismiss(toastId)       
    }
}

export function signUp(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate){
    return async(dispatch)=>{
        const toastId=toast.loading("Loading...")
        dispatch(setloading(true))
        try{
           const response = await apiConnector("POST",SIGNUP_API,{firstName,lastName,email,password,confirmPassword,accountType,otp});
           if(!response.data.success){
            throw new Error(response.data.message);
           }

           toast.success("Signup Successfull");
           navigate("/login")
        } 
        catch(error){
           console.log("Error while Creating Account");
           toast.error("Failed to create Account");
           navigate("/signup")
        }
        dispatch(setloading(false))
        toast.dismiss(toastId)       
    }
}

export function UserLogin(email,password,navigate){
    return async(dispatch)=>{
    const toastId=toast.loading("Loading...")
    dispatch(setloading(true)) 
    try {
        const response=await apiConnector("POST", LOGIN_API,{email,password});
        console.log(response);
        if (!response.data.success) {
            throw new Error(response.data.message)
          }
    
          toast.success("Login Successfull");
          dispatch(setToken(response.data.token))
          const userImage = response.data.image
            ? response.data.UserDetails.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.UserDetails.firstName} ${response.data.UserDetails.lastName}`
          
          dispatch(setUser({ ...response.data.UserDetails, image: userImage }))
          localStorage.setItem("token", JSON.stringify(response.data.token))
          localStorage.setItem("user", JSON.stringify({...response.data.UserDetails,image:userImage}))
          navigate("/dashboard/my-profile")
        } catch (error) {
          console.log("LOGIN API ERROR............", error)
          toast.error("Login Failed")
        }
        dispatch(setloading(false));
     }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
}

export function getPsswordResetToken(email,setEmailSent){
    return async(dispatch)=>{
     dispatch(setloading(true));
     try {
        const response=await apiConnector("POST", RESETPASSTOKEN_API,{email,});
        
        if(!response.data.success){
            throw new Error(response.data.message);
        }

        toast.success("Reset Email Sent");
        setEmailSent(true);

     } catch (error) {
         console.log("RESET PASSWORD TOKEN Error",error);
         toast.error("Failed to send email for resetting password")  ;
     }
     dispatch(setloading(false));
   }
};

export function resetPassword(password,confirmPassword,token){
    return async(dispatch)=>{
     dispatch(setloading(true));
     try {
        const response=await apiConnector("POST",RESETPASSWORD_API,{password,confirmPassword,token});
        
        if(!response.data.success){
            throw new Error(response.data.message);
        }

        toast.success("Password Reset Successfully");

     } catch (error) {
         console.log("RESET PASSWORD Error",error);
         toast.error("Failed to resetting password")  ;
     }
     dispatch(setloading(false));
   }
};