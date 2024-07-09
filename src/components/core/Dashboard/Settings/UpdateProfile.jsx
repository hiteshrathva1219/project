import React from "react";
import { useSelector } from "react-redux";

const UpdateProfile = ()=>{
   const {user}=useSelector((state)=>state.profile);
   return (
       <div className="flex flex-row items-center p-2 rounded-lg gap-3 bg-richblack-800 w-[100%] h-[100px]">
            <img className="w-[60px] h-[60px] rounded-full" src={user?.image} alt={`profile-${user?.firstName}`}/>              
           <div className="flex flex-col gap-2 text-richblack-5">
              <p className="text-xl">Change Profile Picture</p>
              <div className="flex flex-row gap-2  justify-between w-fit">
                  <label htmlFor="file" className="bg-richblack-700 rounded-lg cursor-pointer h-fit w-fit px-2 py-1 text-richblack-5">Select</label>
                  <input type="file" name="file" id="file" className="hidden"/>
                  <button className="bg-yellow-200 rounded-lg cursor-pointer h-fit w-fit px-2 py-1 text-richblack-700">Upload</button>
               </div>
           </div> 
       </div> 
   ) 

}

export default UpdateProfile;