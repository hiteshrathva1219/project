import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryData from "../../../assest/data/countrycode.json"

const ContactUsForm = ()=>{
    
    const [loading,setloading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    }=useForm();

    const submitContactForm = async(data)=>{
       console.log(data);
       try {
          setloading(true);
          const response={status:"Ok"};
          console.log(response);
          setloading(false);

       } catch (error) {
          console.log("error message: ",error.messsage);
          setloading(false);
       }  
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset,isSubmitSuccessful]);

    return (
        <form onSubmit={handleSubmit(submitContactForm)}>
        <div className="flex flex-col gap-4 justify-between mx-auto">
            {/* firstName */}
            <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="firstname">First Name</label>
                <input className="h-[40px] w-[100%] bg-richblack-700 p-2 rounded-md" type="text" name="firstname" id="firstname"
                placeholder="Enter first name"
                {...register("firstname",{required:true})}/>
                {
                    errors.firstname && (
                        <span>Please Enter Your Name</span>
                    )
                }
            </div> 
            {/* LastName */}
            <div className="flex flex-col gap-2">
                <label htmlFor="lastname">Last Name</label>
                <input className="h-[40px] w-[100%] bg-richblack-700 rounded-md p-2" type="text" name="lastname" id="lastname"
                placeholder="Enter Last name"
                {...register("lastname",{required:true})}/>
                {
                    errors.lastname && (
                        <span>Please Enter Your Name</span>
                    )
                }
            </div> 
            </div>
            {/* email  */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input className="h-[40px] w-[100%] bg-richblack-700 rounded-md p-2" type="email" name="email" id="email" placeholder="Enter email Address"
                {...register("email",{required:true})} />
                {
                    errors.email && (
                        <span> 
                            Please enter your email address
                        </span>
                    )
                }
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-3"> 
                <p>Phone Number</p>
                <div className="flex flex-row gap-3">
                    <div className="text-richblack-600">
                        <select name="dropdown" id="dropdown" className="w-[80px] h-[40px] bg-richblack-700 text-richblack-5 rounded-md mt-0">
                            {
                                CountryData.map((element,index)=>{
                                    return (
                                       <option key={index} 
                                       value={element.code}>
                                        {element.code}-{element.country}
                                       </option> 
                                    )
                                })
                            }
                        </select>
                    </div>
                        <input type="text" name="phonenumber" id="phonenumber" placeholder="12345 6789" className="w-[calc(100%-60px)] bg-richblack-700 h-[40px] rounded-md text-richblack-5 p-2"
                        {...register("phoneNo",{
                             
                            required:{value:true,message:"Please Enter Phone Number"},
                            maxLength:{value:10,message:"Invalid Phone Number"},
                            minLength:{value:8,messageL:"Invalid Phone Number"}
                        })}/>
                </div>
            </div>
            {/* message  */}
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea  className="bg-richblack-700 rounded-md"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                {...register("message",{required:true})} />
                {
                    errors.messsage && (
                        <span> 
                            Please enter your message
                        </span>
                    )
                }
            </div>
            <button type="submit" className="font-bold bg-yellow-50 h-[45px] mb-10 rounded-md text-richblack-800 text-lg mt-2">
                Send Message 
            </button>
        </div>
    </form>
    )

}

export default ContactUsForm;