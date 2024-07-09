import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn"

const MyProfile = ()=>{
     
    const {user}=useSelector((state)=>state.profile)
    const navigate=useNavigate();
   
    return (
    <div className="flex flex-col  justify-center items-center mx-auto w-[100%]">
    <div className="text-richblack-700  w-[80%] flex-col mx-auto flex gap-2 items-start">
         <h1 className="text-3xl mb-7 font-bold text-richblack-5 px-2">My Profile</h1>
         <div className="flex flex-col gap-2 w-[100%]">
            {/* section 1 */}
            <div className="flex flex-row justify-between w-[100%] h-[100px] items-center px-5 bg-richblack-800 rounded-md">
               <div className="flex flex-row gap-2 items-center">
               <img src={user?.image} alt={`profile-${user?.firstName}`} 
               className="ascpect-square w-[60px] rounded-full object-cover"/>   
               <div className="flex flex-col gap-1 text-richblack-5">
                  <p>{user?.firstName + " " + user?.lastName}</p>
                  <p className="text-richblack-300">{user?.email}</p>
               </div>
               </div>
               <IconBtn text={"Edit"} onclick={()=>{
                  navigate("/dashboard/settings")
               }}/>
            </div>
            {/* section 2 */}
            <div className="flex flex-col justify-evenly w-[100%] rounded-md h-[100px] items-start gap-3 px-5 bg-richblack-800">
                <div className="flex flex-row justify-between gap-2 w-[100%]">
                    <p className="text-2xl font-semibold text-richblack-5">About</p>
                    <IconBtn text="Edit" onclick= {()=>{
                        navigate("/dashboard/settings")
                    }}/>
                </div>
                <p className="text-richblack-300">{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
            </div>
             
            {/* section 3 */}
            <div className="flex flex-col px-5 bg-richblack-800 rounded-md gap-3 text-richblack-5 py-3">
                <div className="text-richblack-5 flex flex-row justify-between w-[100%] h-[100px] items-center">
                    <p className="text-2xl font-semibold">Personal Details</p>
                    <IconBtn text="Edit" onclick={()=>{
                        navigate("/dashboard/settings")
                    }}/>
                </div>
                <div className="flex flex-row px-5 gap-20">
                    <div className="flex flex-col gap-4">
                       <div className="flex flex-col gap-1">
                        <p className="text-richblack-300">First Name</p>
                        <p>{user?.firstName}</p>
                       </div> 

                       <div>
                        <p className="text-richblack-300">Email</p>
                        <p>{user?.email}</p>
                       </div> 
                       <div>
                        <p className="text-richblack-300">Gender</p>
                        <p>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                       </div> 
                    </div>

                    <div className="flex flex-col justify-between gap-2">
                       <div>
                        <p className="text-richblack-300">Last Name</p>
                        <p>{user?.lastName}</p>
                       </div> 

                       <div>
                        <p className="text-richblack-300">Phone Number</p>
                        <p>{user?.additionalDetails.contactNumber ?? "Add Phone Number"}</p>
                       </div> 
                       <div>
                          <p className="text-richblack-300">Date of Birth</p>
                          <p>{user?.additionalDetails.dateOfBirth ?? "Add Date of Birth"}</p>
                       </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
    </div>
   )
}

export default MyProfile