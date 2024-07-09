import { apiConnector } from "../apiconnector"
import {settingsEndpoints} from "../apis"
import toast from "react-hot-toast"
import { logout } from "./authAPI"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../slices/profileSlice"
import { setToken } from "../../slices/authSlice"

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,    
}=settingsEndpoints

export function updateDisplayPicture(token,formData){
   return async(dispatch)=>{
     const toastId=toast.loading("Loading...")
     try {
        const response=await apiConnector("PUT",UPDATE_DISPLAY_PICTURE_API,formData,{
            "Content-Type":"multipart/form-data",
            Authorisation:`Bearer ${token}`,
        })
        console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE....",response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("Display Picture Updated Successfully")
        dispatch(setUser(response.data.data))
     } catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR....",error)
        toast.error("Could Not Update Display Picture")
     }
     toast.dismiss(toastId);
   }
}

export function updateProfile(token,formData){
   return async(dispatch)=>{
     const toastId=toast.loading("Loading...")
     try {
      const response=await apiConnector("PUT",UPDATE_PROFILE_API,{formData,token},{
         Authorisation:`Bearer ${token}`,
     })
        console.log("UPDATE_PROFILE_API API RESPONSE....",response.data.updatedUserDetails);
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        console.log(response.data.updatedUserDetails.image);
        const userImage = response.data.image
        ? response.data.updatedUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
        dispatch(setUser({ ...response.data.updatedUserDetails, image: userImage }))
      //   dispatch(setToken(response.data.token));
      //   localStorage.setItem("token", JSON.stringify(response.data.token))
           localStorage.setItem("user",JSON.stringify({...response.data.updatedUserDetails,image:userImage}));
        console.log(userImage);  
      toast.success("Profile Updated Successfully")

     } catch (error) {
        console.log("UPDATE_PROFILE_API ERROR....",error)
        toast.error("Could Not Update Profile")
     }
     toast.dismiss(toastId);
   }
}

export function changePassword(token,formData){
   return async(dispatch)=>{
      const toastId=toast.loading("Loading...")
     try {
        
       const response=await apiConnector("PUT",CHANGE_PASSWORD_API,{formData,token},{
         Authorisation:`Bearer ${token}`,
        })
        console.log("CHANGE_PASSWORD_API API RESPONSE....",response.data)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("Password Updated Successfully")
      //   dispatch(setUser(response.data.data))

     } catch (error) {
        console.log("CHANGE_PASSWORD_API ERROR....",error)
        toast.error("Could Not Update Password")
     }
     toast.dismiss(toastId);
   }
}

export function deleteProfile(token,user,navigate){
   return async(dispatch)=>{
      const toastId=toast.loading("Loading...")
      try {
        const response=await apiConnector("DELETE",DELETE_PROFILE_API,{user,token},{
         Authorisation:`Bearer ${token}`,
        })
        console.log("DELETE_PROFILE_API API RESPONSE....",response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("Profile Deleted Successfully")
        dispatch(logout(navigate))

     } catch (error) {
        console.log("DELETE_PROFILE_API ERROR....",error)
        toast.error("Could Not Delete Profile")
     }
     toast.dismiss(toastId);
   }
}
