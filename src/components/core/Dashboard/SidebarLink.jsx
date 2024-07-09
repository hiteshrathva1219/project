import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import * as Icons from "react-icons/vsc";
// import { icons } from "react-icons";

const SidebarLink = ({link,iconName})=>{
    
    const location = useLocation();
    const dispatch=useDispatch();
    const Icon=Icons[iconName];
    // console.log(Icon);

    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
    
    return (
        <NavLink to={link?.path}
        className={`relative px-8 py-2 text-md font-medium  ${matchRoute(link?.path)?"bg-yellow-700 text-yellow-50":""}`}> 
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] ${matchRoute(link?.path)?"bg-yellow-5":""}`}> 
        </span>
        <div className="flex items-center gap-x-2">
             {/* <Icon/> */}
             <span>{link?.name}</span>
        </div>
        </NavLink>
    )
}

export default SidebarLink;