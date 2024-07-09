import React from "react";
import UpdateProfile from "./UpdateProfile";
import ProfileInfo from "./ProfileInfo"
import UpdatePassword from "./UpdatePassword";
import DeleteAccount from "./DeleteAccount";


const Settings =()=>{
  
    return (
     <div className="flex flex-col w-[80vw] items-center mx-auto">
         <div className="flex flex-col justify-between gap-10 w-[70%] items-start">
            <h1 className="text-3xl font-bold text-richblack-5">Edit Profile</h1>
            <UpdateProfile/>
            <ProfileInfo/>
            <UpdatePassword/>
            <DeleteAccount/>
         </div>
     </div>
  )
}

export default Settings;