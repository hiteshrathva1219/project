import React, { useState } from "react";
import sidebarLinks from "../../../assest/data/dashboard-links"
import SidebarLink from "./SidebarLink";
import { logout } from "../../../services/operations/authAPI";
import { Navigate, useNavigate } from "react-router-dom";
import Confirmation from "../../common/ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";

// import { sidebarLinks } from "../../../assest/data/dashboard-links";
const Sidebar = ()=>{
    const {loading:authloading}=useSelector((state)=>state.auth);
    const {loading:profileLoading}=useSelector((state)=>state.profile);
    const {user}=useSelector((state)=>state.profile);
    const navigate=useNavigate();
    const dispatch=useDispatch();
     const [ConfirmationModal,setConfirmationModal]=useState(null);

    if(authloading || profileLoading){
        return (
            <div className="mt-10 text-richblack-5 text-4xl">
                Loading...
            </div>
        )
    }
    return (
        <div className=" text-richblack-5 flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-700 py-10">
             
             <div className="flex flex-col gap-2">
                {
                    sidebarLinks.map((link)=>{
    
                        if(link?.type && user?.accountType!==link?.type) return null;
                        return (
                            <SidebarLink key={link?.id} link={link} iconName={link?.icon}/>
                        )
                    })
                }
             </div>

             <div className="mx-auto mt-5 mb-5 w-full bg-richblack-800 h-[1px]">

             </div>
             <div className="flex flex-col gap-1">
                <SidebarLink
                   link={{name:"Settings",path:"dashboard/settings"}}
                   iconname="VscSettingGear"
                 />

                 <button onClick={()=>setConfirmationModal({
                    text1:"Are you Sure ?",
                    text2:"You Will be logged out of your Account",
                    btn1Text:"Logout",
                    btn2Text:"Cancel",
                    btn1Handler:()=>dispatch(logout(navigate)),
                    btn2Handler:()=>setConfirmationModal(null),
                 })}
                 className="items-start w-[50%]">
                    <p>Logout</p>  
                 </button>
             </div>
        <div className="h-[100%] w-[100%] relative">
        {ConfirmationModal && <Confirmation modalData={ConfirmationModal}/>}
        </div>
        </div>
    )

}
export default Sidebar;