
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../slices/profileSlice";
import { useState } from "react";
import {updateProfile} from "../../../../services/operations/SettingAPI"

const ProfileInfo = ()=>{
   const {user}=useSelector((state)=>state.profile);
   const {token}=useSelector((state)=>state.auth);
   console.log(user);
   const dispatch=useDispatch();
   const [formData,setFormData]=useState({
      firstName:user?.firstName,
      lastName:user?.lastName,
      contactNumber:user?.additionalDetails?.contactNumber,
      gender:user?.additionalDetails?.gender,
      dateOfBirth:user?.additionalDetails?.dateOfBirth,
      about:user?.additionalDetails?.about,
  }) 
  const handleOnChange=(e)=>{
    setFormData ((prevdata)=>(
       {
          ...prevdata,
          [e.target.name]:e.target.value,
       } 
    ))
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    dispatch(updateProfile(token,formData));
   }
    return (
    <form className="w-[100%]" onSubmit={handleOnSubmit}>
      <div className="w-[100%] max-h-max bg-richblack-800 rounded-lg flex flex-col gap-4 p-5">
        <h1 className="text-richblack-5 text-2xl">Personal Information</h1>
        <div className="flex flex-row items-start w-[90%] justify-evenly">
           <label className="gap-1 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">First Name</p>
              <input onChange={handleOnChange} className="px-2 h-[40px] w-[90%] bg-richblack-700 rounded-lg text-md text-richblack-5" type="text" name="firstName" id="firstName"  defaultValue={user?.firstName}/>
           </label>
           <label className="gap-2 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">Last Name</p>
              <input onChange={handleOnChange} className="px-2 h-[40px] w-[100%] rounded-lg bg-richblack-700 text-md text-richblack-5" type="text" name="lastName" id="lastName" defaultValue={user?.lastName}/>
           </label>
        </div>

        <div className="flex flex-row items-start w-[90%] justify-evenly">
           <label className="gap-1 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">Date of Birth</p>
              <input onChange={handleOnChange} className="px-2 h-[40px] w-[90%] bg-richblack-700 rounded-lg text-md text-richblack-5" type="date" name="dateOfBirth" id="dateOfBirth" defaultValue={user?.additionalDetails?.dateOfBirth}/>
           </label>
           <label className="gap-2 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">Gender</p>
              <input onChange={handleOnChange} className="px-2 h-[40px] w-[100%] rounded-lg bg-richblack-700 text-md text-richblack-5" type="text" name="gender" id="gender" defaultValue={user?.additionalDetails?.gender}/>
           </label>
        </div>

        <div className="flex flex-row items-start w-[90%] justify-evenly">
           <label className="gap-1 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">Contact Number</p>
              <input  onChange={handleOnChange} className="px-2 h-[40px] w-[90%] bg-richblack-700 rounded-lg text-md text-richblack-5" type="phone" name="contactNumber" id="contactNumber" defaultValue={user?.additionalDetails?.contactNumber}/>
           </label>
           <label className="gap-2 flex flex-col w-[100%]">
              <p className="text-richblack-5 text-md">About</p>
              <input onChange={handleOnChange} className="px-2 h-[40px] w-[100%] rounded-lg bg-richblack-700 text-md text-richblack-5" type="text" name="about" id="about" defaultValue={user?.additionalDetails?.about}/>
           </label>
        </div>
    </div>
     <div className="h-[35px] w-[99%] mt-5 text-richblack-5 flex flex-row justify-end gap-5">
         <button className="bg-richblack-700 rounded-md px-2 text-richblack-5 text-center w-[70px]">
            Cancle
         </button>
         <button className="bg-yellow-25 rounded-md px-2 text-richblack-700 text-center w-[70px]" type="submit">
             Save
         </button>
     </div>
    </form>
   )
}

export default ProfileInfo;