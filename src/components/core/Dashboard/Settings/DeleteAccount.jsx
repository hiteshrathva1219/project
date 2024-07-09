import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {deleteProfile} from "../../../../services/operations/SettingAPI"

const DeleteAccount = ()=>{
   const {user}=useSelector((state)=>state.profile);
   const {token}=useSelector((state)=>state.auth);
   const navigate=useNavigate();
   const dispatch=useDispatch();

   const deleteprofile = ()=>{
      dispatch(deleteProfile(token,user,navigate));
   }
   return (
       <div className="flex flex-row gap-3 rounded-lg py-2 px-1 item-center mx-auto w-[100%] bg-brown-900  h-fit">
            <button className="text-4xl text-center h-fit bg-brown-800 text-richblack-5 w-fit rounded-full p-2" onClick={deleteprofile}>
                <RiDeleteBin6Line/>
            </button>
            <div className="flex flex-col gap-0 items-start">
                <button className="text-2xl text-richblack-5 font-bold">Delete Acount</button>
                <p className=" text-richblack-200">Would like you delete account?</p>
                <p className=" text-richblack-200 text-justify w-[50%]">This account may contain Paid Courses.Deleting your account is permanet will remove all the contained assocaited it.</p>
            </div>
       </div>
    )

}

export default DeleteAccount;