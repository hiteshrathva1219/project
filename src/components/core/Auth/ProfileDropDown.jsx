import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProfileDropDown = ()=>{
    const {user}=useSelector((state)=>state.profile);
    const [showoption,setshowoption]= useState(false);
    const navigate=useNavigate();
   //  console.log(user);
    const ShowDashboard=()=>{
        setshowoption(false);
        console.log(showoption);
        navigate("/dashboard/my-profile");
    }
    const ShowDashboard2=()=>{
        setshowoption(false);
        console.log(showoption);
        navigate("/dashboard/my-profile");
    }
    const DoLogout=()=>{

    }
    return (
    <div>
        <div className="flex flex-row justify-center items-center" onClick={()=>{setshowoption(!showoption);}}>
        <div className="h-[30px] w-[30px] cursor-pointer">
          <img className="rounded-full" src={user?.image} alt={`profile-${user?.firstName}`}/>
        </div>
        </div>
        
          <div className={`rounded-md flex flex-col gap-2 max-w-maxContent absolute translate-y-[6%] translate-x-[-60%] bg-richblack-700 ${showoption===true?"opacity-100":"opacity-0"}`}>
           <button className="text-[15px] h-[40%] w-[100%] text-richblack-5 text-center pt-1 px-2 transition-all duration-300 hover:bg-richblack-800" onClick={ShowDashboard}>
              <p>Dashboard</p>
           </button>
           </div>
    </div>
  )
}

export default ProfileDropDown;