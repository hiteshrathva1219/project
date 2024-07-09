import React from "react";
import HighlightText from "../components/core/Homepage/HighlightText";
import frame from "../assest/images/frame.png"
import signuppic from "../assest/images/signup.webp"
import CTAButton from "../components/core/Homepage/Button"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";
import { useState } from "react";
import { sendOtp } from "../services/operations/authAPI";
import { SignupData,setSignupData } from "../slices/authSlice";

const Signup = ()=>{
  const [formData,setFormData]=useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmpassword:"",
      contactNumber:"",
  })

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [accountType,setaccountType]=useState("Student");

  const { 
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    contactNumber,
    }=formData;

  const handleOnChange=(e)=>{
      setFormData ((prevdata)=>(
        {
            ...prevdata,
            [e.target.name]:e.target.value,
        } 
      ))
  }
  const SignupData = {
    ...formData,
    accountType,
  }
  const handleOnSubmit = (e)=>{
      e.preventDefault();
      dispatch(setSignupData(SignupData));
      localStorage.setItem("SignupData", JSON.stringify(SignupData));
      dispatch(sendOtp(email,navigate));
  }  
  return (
     <div className="flex flex-row justify-between mx-auto gap-24 mt-10">
          <div className="flex flex-col justify-between gap-2 items-start h-[100px] w-[400px]">
             <div className="text-2xl font-bold text-white">
                 <p>Join the millions learning to code with StudyNotion for free</p>
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
               
              <form className="flex flex-col gap-2" onSubmit={handleOnSubmit}>
                  <div className="flex flex-row gap-5">
                       <label className="flex flex-col items-start mt-5 gap-2">
                         <p className="text-lg text-richblack-200 font-semibold">Enter Name:</p>
                         <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5 h-[30px] text-richblack-5 p-1 rounded-md bg-richblack-600" type="text" name="firstName" id="firstName" placeholder="Enter First name"/>
                       </label>
                       <label className="flex flex-col items-start mt-5 gap-2">
                         <p className="text-lg text-richblack-200 font-semibold">Last Name:</p>
                         <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5  h-[30px] p-1 text-richblack-5 rounded-md bg-richblack-600" type="text" name="lastName" id="lastName" placeholder="Enter Last name"/>
                       </label>
                  </div>
                  <label className="flex flex-col items-start mt-5 gap-2">
                     <p className="text-xl text-richblack-200 font-semibold">Email Address:</p>
                     <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5 w-full h-[30px] text-richblack-5 p-1 rounded-md bg-richblack-600" type="text" name="email" id="email" placeholder="Enter email Adreess"/>
                 </label>
                 
                  <label className="flex flex-col items-start mt-5 gap-2">
                    <p className="text-lg text-richblack-200 font-semibold">Phone Number:</p>
                  <div className="flex flex-row justify-between gap-2">
                    <input className="text-center read-only: shadow-md shadow-richblack-5 w-[10%] h-[30px] px-1 rounded-md text-richblack-5 bg-richblack-600"  type="text" placeholder="+91" />
                    <input onChange={handleOnChange} className="shadow-md shadow-richblack-5  h-[30px] w-[90%] px-2 rounded-md text-richblack-5 bg-richblack-600" type="phone" name="contactNumber" id="contactNumber" placeholder="1234567890"/>
                    </div>
                  </label>
              
                  <div className="flex flex-row mt-5 gap-5">
                       <label className="flex flex-col items-start gap-2 w-[50%]">
                         <p className="text-lg text-richblack-200 font-semibold">Create Password:</p>
                         <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5  h-[37px] px-1 rounded-md bg-richblack-600 text-richblack-5" type="password" name="password" id="password" placeholder="Enter Password"/>
                       </label>
                       <label className="flex flex-col items-start gap-2 w-[50%]">
                         <p className="text-lg text-richblack-200 font-semibold">Confirm Password:</p>
                         <input required onChange={handleOnChange} className="shadow-md shadow-richblack-5 h-[37px] px-2 rounded-md bg-richblack-600 text-richblack-5" type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Password"/>
                       </label>
                  </div> 
                <button className="bg-yellow-25 w-[100%] h-9 mt-4 rounded-xl" type="submit">
                        Create Account
                </button>
              </form>     
          </div>
          <div className="h-[500px] w-[500px]">
              <div>
                <img src={frame} alt="frame"/>
              </div>
              <div className="opacity-1 -translate-y-[104%] -translate-x-[4%] ">
                <img src={signuppic} alt="frame"/>
              </div>
          </div>
     </div>
   )
}

export default Signup;