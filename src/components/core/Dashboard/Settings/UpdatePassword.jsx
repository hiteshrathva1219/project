import React from "react";
import { useSelector } from "react-redux";
import {changePassword} from "../../../../services/operations/SettingAPI"
import { useDispatch } from "react-redux";
import { useState } from "react";

const UpdatePassword = ()=>{
    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({
       
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
        console.log(formData);
        dispatch(changePassword(token,formData));
    }
    return (
        <form className="w-[100%]" onSubmit={handleOnSubmit}>
        <div className="w-[100%] max-h-max bg-richblack-800 rounded-lg flex flex-col gap-4 p-5">
          <h1 className="text-richblack-5 text-2xl">Password</h1>
          <div className="flex flex-row items-start w-[90%] justify-evenly">
             <label className="gap-1 flex flex-col w-[100%]">
                <p className="text-richblack-5 text-md">Current Password</p>
                <input onChange={handleOnChange} className="px-2 h-[40px] w-[90%] bg-richblack-700 rounded-lg text-md text-richblack-5" type="password" name="currentPassword" id="currentPassword"/>
             </label>
             <label className="gap-2 flex flex-col w-[100%]">
                <p className="text-richblack-5 text-md">New Password</p>
                <input onChange={handleOnChange} className="px-2 h-[40px] w-[100%] rounded-lg bg-richblack-700 text-md text-richblack-5" type="password" name="newPassword" id="newPassword"/>
             </label>
          </div>      
      </div>
       <div className="h-[35px] w-[99%] mt-5 text-richblack-5 flex flex-row justify-end gap-5">
           <button className="bg-richblack-700 rounded-md px-2 text-richblack-5 text-center w-[70px]">
              Cancle
           </button>
           <button className="bg-yellow-25 rounded-md px-2 text-richblack-700 text-center w-[70px]" type="submit">
               Update
           </button>
       </div>
      </form>
    )
}

export default UpdatePassword;