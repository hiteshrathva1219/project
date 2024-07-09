 import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
import { useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const  UpdatePassword = ()=>{
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:"",
    })
    const {loading} = useSelector((state)=>state.auth);
    const [showPassword,setshowPassword]=useState(false);
    const [showConfirmPassword,setshowConfirmPassword]=useState(false);
    const dispatch=useDispatch();
    const {password,confirmPassword}=formData;
    const location=useLocation();
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
        const token=location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token));
    }
    
   return (
        <div className="flex mx-auto items-center justify-center my-auto">
           {
               loading ? (
                 <div>
                   Loading...
                 </div>
               ):(
                  <div className="flex flex-col mx-auto justify-center items-start bg-richblack-900 text-richblack-5 gap-3 w-[400px]">
                      <h1 className="text-3xl">Choose New Password</h1>
                      <p className="text-richblack-200">Almost done,Enter your new password and you are all set.</p>
                      <form onSubmit={handleOnSubmit} className="w-[100%] flex flex-col gap-4">
                          <label>
                              <p className="mb-1">New Password<sup>*</sup></p>
                              <input className=" bg-richblack-800  w-[90%] p-2 rounded-md" required type={showPassword?"text":"password"} name="password" value={password} onChange={handleOnChange} placeholder="New Password"/>
                              {/* <span onClick={()=>setshowPassword((prev)=>!prev)} className="text-3xl">
                                 {
                                    showPassword ? <IoIosEye /> : <IoIosEyeOff />
                                 }
                              </span> */}
                          </label>

                          <label>
                              <p className="mb-1">Confirm New Password<sup>*</sup></p>
                              <input className=" bg-richblack-800 w-[90%] p-2 rounded-md relative" required type={showConfirmPassword?"text":"password"} name="confirmpassword" value={confirmPassword} onChange={handleOnChange} placeholder="Confrim Password"/>
                              {/* <span onClick={()=>setshowConfirmPassword((prev)=>!prev)} className="text-3xl">
                                 {
                                    showConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />
                                 }
                              </span> */}
                          </label>
                           <button type="submit" className=" mt-2 bg-yellow-25 w-[90%] h-[35px] rounded-lg text-richblack-800">
                                 Reset Password
                           </button>
                      </form>
                      <div>
                        <Link to="/login" className="flex flex-row gap-1 items-center transition-all duration-200 hover:text-richblack-700">
                        <IoIosArrowRoundBack />
                        <p>Back to Login</p>
                       </Link>
                      </div>
                  </div>
               )
           }    
        </div>
    ) 
}

export default UpdatePassword