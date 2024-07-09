import React, { useEffect, useState } from "react";
import logo from "../../assest/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import Navbarlinks from "../../assest/data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const subLinks = [
    {
        title:"Python",
        link:"catalog/python",
    },
    {
        title:"Web Development",
        link:"catalog/web-development",
    },
    {
        title:"DSA",
        link:"catalog/dsa",
    },
];

const Navbar = ()=>{
    const {token}=useSelector((state)=>(state.auth));
    const {user}=useSelector((state)=>state.profile);
    const {totalItems}=useSelector((state)=>state.cart);
    const location=useLocation();
    // const [subLinks,setSubLinks] = useState([]);
    
    // const fetchSublinks = async()=>{
    //         try {
    //             const result=await apiConnector("GET",categories.CATEGORIES_API);
    //             console.log(result);
    //             setSubLinks(result.data.data);

    //         } catch (error) {
    //             console.log("Could not fetch the category list");
    //         }
    // }

    useEffect(()=>{
       //  fetchSublinks(); 
    },[])

    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
    return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">

           <Link to="/">
             <img src={logo} alt="" className="h-10"/>
             
           </Link> 
           <nav>
               <ul className="flex gap-x-6 text-richblack-25">
                  {
                    Navbarlinks.map((link,index)=>(
                        <li key={index}>
                            {
                              link.title==="Catalog"?(
                                <div className="relative flex flex-row gap-2 items-center group cursor-pointer">
                                    <p>{link.title}</p>
                                    <IoIosArrowDropdownCircle />

                                    <div className="invisible z-[1000] absolute left-[50%] translate-x-[-50%] translate-y-[30%] text-richblack-900
                                    top-[50%] flex flex-col rounded-md px-2 py-2 bg-richblack-5 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 group-hover: lg:w-[300px]">
                                    {
                                        subLinks.length ? (
                                            subLinks.map((subLink,index)=>(
                                        
                                                <Link to={`${subLink.link}`}>
                                                      {subLink.title}
                                                </Link>
                                            ))
                                        ):(<div></div>)
                                    }    
                                    <div className="absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5">
                                    </div>                                     
                                    </div>
                                </div>
                              ):(
                                <Link to={link?.path}>
                                 <p className={`${matchRoute(link?.path)?"text-yellow-25":"text-richblack-25"}`}>
                                 {link.title}
                                 </p>
                                </Link>
                              )
                           }
                        </li>

                    ))
                  }                
               </ul>
           </nav>
            
            {/*Login/SigunUp/Dashboard*/}
            <div className="flex gap-x-4 items-center text-richblack-5 text-xl">
                {
                    user && user?.accountType!=="Instructor" && (
                        <Link to="/dashboard/cart" className="relative">
                            {
                                totalItems > 0 ? (
                                    <span className="relative flex flex-row">
                                        <p className="text-sm">{totalItems}</p>
                                        <AiOutlineShoppingCart />
                                    </span>
                                ):(<AiOutlineShoppingCart />)
                            } 
                        </Link>
                    )

                }
                {
                    token===null && (
                        <Link to="/login">
                            <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 rounded-md">
                                Log in
                            </button>
                        </Link>
                    )
                }
                {
                    token===null && (
                        <Link to="/signup">
                            <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 rounded-md">
                                Sign Up
                            </button>
                        </Link>
                    )
                }
                {
                    token!==null && <ProfileDropDown/>
                }
            </div>
            
        </div>
    </div>
   )
}

export default Navbar;