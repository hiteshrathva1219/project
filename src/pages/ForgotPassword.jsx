import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getPsswordResetToken } from "../services/operations/authAPI";
import { LoadingSpinner } from "video-react";

const ForgotPassword = ()=>{
   const [emailSent,setEmailSent]=useState(false);
   const [email,setEmail]=useState("");
   const [loading,setloading]=useState(false);
   const dispatch=useDispatch();

   const handleOnSubmit=(e)=>{
       e.preventDefault();
       dispatch(getPsswordResetToken(email,setEmailSent));
   }
    return (
     loading?(<div>
        Loading....
     </div>):(   
    <div className="flex flex-row justify-center mx-auto my-auto">
        <div className="w-[80%] flex flex-col justify-between items-start text-richblack-5 max-h-mx bg-richblack-900 gap-4">
            <h1 className="text-3xl">
                {
                   !emailSent ? "Reset your password" : "Check Your Email"
                }
            </h1>
            <p className="text-richblack-300 max-w-maxContentTab w-[100%]">
                {
                    !emailSent?"Have no fear We'll email instructions to reset you password,If you don't have access to your email we can try account recovery":`We have sent the reset email to ${email}`
                }
            </p>

            <form onSubmit={handleOnSubmit} className={`w-[100%] flex flex-col gap-6 ${emailSent?"h-[100px]":"h-[140px]"}`}
            >
                {
                    !emailSent && (
                        <label>
                            <p className="text-xl text-richblack-100">Email Address:</p>
                            <input type="email" required name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter Your Email Address" className="w-[90%] h-[80%] px-2 bg-richblack-800 rounded-md"/>                       
                         </label>
                    )
                }
                <button type="submit" className={`w-[90%] bg-yellow-50 mt-5 rounded-md text-richblack-700 ${emailSent?"h-[40%]":"h-[25%]"}`}>
                    {
                        !emailSent ? "Reset Passowrd" : "Resend Email"
                    }
                </button>
            </form>
            <div>
                <Link to="/login" className="flex flex-row gap-1 items-center transition-all duration-200 hover:text-richblack-700">
                  <IoIosArrowRoundBack />
                  <p>Back to Login</p>
                </Link>
            </div>
        </div>
    </div>
     )
   )
}

export default ForgotPassword