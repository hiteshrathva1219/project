import React, { useState } from "react";
import HighlightText from "../components/core/Homepage/HighlightText";
import frame from "../assest/images/frame.png"
import loginpic from "../assest/images/login.webp"
import CTAButton from "../components/core/Homepage/Button"
import { Link } from "react-router-dom";
import { UserLogin } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [type,settype]=useState("Student");
    const {email,password}=formData;
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
        dispatch(UserLogin(email,password,navigate));
    }
    const [accountType,setaccountType]=useState("Student");
    return (
     <div className="flex flex-row justify-center items-center mt-10 gap-20">
          <div className="flex flex-col justify-between gap-5 items-start h-[150px]">
             <div className="text-4xl font-bold text-white">
                 <p>Welcome Back</p>
             </div>
             <div className="text-richblack-25 text-base">
                 <p>Build Skill for today,tommorrow,and beyond.</p>
                 <HighlightText text={"Education to future-proof your career"}/>
             </div>
             <div className="flex flex-row gap-0">
                    <div className="bg-richblack-600 max-w-maxContent rounded-full py-2 px-2 flex flex-row gap-3 mt-2 h-[40px] items-center cursor-pointer justify-between">
                        <div className={`text-xl font-inter  rounded-xl  px-2 text-richblack-25 gap-5 transition-all duration-200  hover:bg-richblack-800 ${accountType==="Student"?"bg-richblack-800":""}`} onClick={(e)=>setaccountType("Student")}>Student</div>
                        <div className={`text-xl font-inter rounded-xl px-2 text-richblack-25 gap-5 transition-all duration-200 hover:bg-richblack-800 ${accountType==="Instructor" ?"bg-richblack-800":""}`} onClick={(e)=>setaccountType("Instructor")}>Instructors</div>
                   </div>
             </div>
             <form className="flex flex-col gap-2 w-[400px]" onSubmit={handleOnSubmit}>
                 <label className="flex flex-col items-start mt-5 gap-2">
                     <p className="text-xl text-richblack-200 font-semibold">Email Address:</p>
                     <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5 w-full h-[35px] px-1 rounded-md bg-richblack-600 text-richblack-5" type="text" name="email" id="email" placeholder="Enter email Adreess"/>
                 </label>
                 <label className="flex flex-col items-start mt-5 gap-2">
                     <p className="text-xl text-richblack-200 font-semibold">Password:</p>
                     <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5 w-full text-richblack-5  h-[35px] rounded-md px-2 bg-richblack-600" type="password" name="password" id="password" placeholder="Enter Your Password"/>
                 </label>

                 <div className="flex flex-row-reverse text-richblue-300 transition-all duration-200 hover:text-richblack-5 cursor-pointer">
                     <Link to="/forgot-password">
                       <p>Forgot Password?</p>
                     </Link>
                 </div>
              <button className="w-full mt-5 items-center transition-all duration-200 h-10 bg-yellow-25 rounded-xl" type="submit">
                 Sign In
             </button>
          </form>
          </div>
          <div className="h-[150px] bg-white">
              <div>
                <img src={frame} alt="frame"/>
              </div>
              <div className="opacity-1 -translate-y-[104%] -translate-x-[4%] ">
                <img src={loginpic} alt="frame"/>
              </div>
          </div>
     </div>
   )
}

export default Login;