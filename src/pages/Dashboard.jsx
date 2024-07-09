import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";
import SidebarLink from "../components/core/Dashboard/SidebarLink";
import { useSelector } from "react-redux";
import authSlice from "../slices/authSlice"; 
import profileSlice from "../slices/profileSlice";


const Dashboard = ()=>{
    
    // const {loading:authLoading}=useState((state)=>state.auth);
    const {loading:authLoading}=useSelector((state)=>state.auth);
    const {loading:profileLoading}=useSelector((state)=>state.profile);

    if(authLoading || profileLoading){
        return (
            <div className="mt-10 text-richblack-5 text-4xl">
                Loading...
            </div>
        )
    }

    return (
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
          <Sidebar/>
          <div className="h-[calc(100vh-3.5rem)] w-[calc(100vw-3.5rem)] overflow-auto">
             <div className="w-11/12 max-w-[1000px] py-10">
                 <Outlet/>
             </div>
          </div>
      </div>
    )
}

export default Dashboard;