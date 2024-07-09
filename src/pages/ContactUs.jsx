import React from "react";
import ContactUsForm from "../components/core/ContactPage/ContactUsForm";
import ReviewSlider from "../components/common/ReviewSlider";

const ContactUs = () =>{
  return (
    <div className="flex flex-col gap-3">
    <div className="w-10/12 flex flex-row justify-between mx-auto gap-4 mt-20">
        <div className="flex flex-col justify-center gap-8  bg-richblack-800 text-richblack-5 h-[400px] w-[40%] rounded-xl">
            <div className="flex flex-col justify-between gap-0 px-5 py-2">
                <p className="text-xl font-bold">Chat on Us</p>
                <p className="text-richblack-300 text-justify">Our friendly team is here to help.</p>
                <p className="text-richblack-300 text-justify">info@studynotion.com </p>
            </div>

            <div className="flex flex-col px-5 py-2">
                <p className="text-xl font-bold">Visit Us</p>
                <p className="text-richblack-300 text-justify">Come and say hello at our office HQ.
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            </div>

            <div className="flex flex-col px-5 py-2">
                <p className="text-xl font-bold">Call Us</p>
                <p className="text-richblack-300 text-justify">Mon - Fri From 8am to 5pm</p> 
                <p className="text-richblack-300 text-justify">+123 456 7869</p>
            </div>
        </div>

        <div className="flex flex-col justify-between mx-auto items-start w-[55%] px-10 py-5 border-separate border-[1px] border-richblack-400 rounded-xl">
        <div className="flex flex-col gap-3 text-richblack-5 items-start mx-auto">
         <h1 className="text-4xl font-semibold">
          Got a Idea? We've got the skills. Let's team up
         </h1>
         <p className="text-richblack-300">
            Tell us more about yourself and what you're got in mind.
         </p>
         <div className="w-[100%]">
           <ContactUsForm/>
         </div>
         </div>
         </div>
    </div> 
         <div className="ml-20">
          <ReviewSlider/>
         </div>
    </div>
  )
}

export default ContactUs;