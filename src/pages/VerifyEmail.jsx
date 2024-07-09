import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { signUp } from "../services/operations/authAPI";
import { sendOtp } from "../services/operations/authAPI";

 const VerifyEmail = ()=>{
     
    const {loading}=useSelector((state)=>state.auth);
    const [otp,setOtp]=useState("");
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const {SignupData}=useSelector((state)=>state.auth);
    useEffect(()=>{
        if(!SignupData){
            navigate("/signup");
       }
    },[]);
    
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
        }=SignupData;
        // console.log("->>>",SignupData);
        dispatch(signUp(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate));
    }

    return (
        <div className="flex flex-col items-center my-auto mx-auto justify-center text-richblack-5">
                 <div className="flex flex-col gap-7 bg-richblack-900 h-[300px]">
                    <div className="flex flex-col">
                     <h1 className="text-2xl font-bold">Verify Email</h1>
                     <p className="text-richblack-300">A verification code has been to you,Enter the code below</p>
                    </div>
                     <form onSubmit={handleOnSubmit} className="flex flex-col gap-3 text-richblack-700">
                        <OTPInput value={otp}
                        onChange={setOtp} 
                        numInputs={6}
                        renderInput={(props)=><input {...props}/>}/>

                        <button type="submit" className="text-xl w-[100%] bg-yellow-25 text-richblack-800 rounded-lg h-[40px]">
                             Verify Email
                        </button>
                     </form>
                     <div className="flex flex-row justify-between px-2 text-xl">
                     <div className="">
                        <Link to="/login" className="flex flex-row gap-1 items-center transition-all duration-200 hover:text-richblack-700">
                        <IoIosArrowRoundBack />
                        <p>Back to Login</p>
                       </Link>
                      </div>

                      <button onClick={()=>dispatch(sendOtp(SignupData.email,navigate))}>
                          Resend it
                      </button>
                     </div>
                 </div>
        </div>
    )

}

export default VerifyEmail;