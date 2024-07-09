import React from "react";
import ContactUsForm from "../ContactPage/ContactUsForm"

const ContactFormSection = ()=>{
   return (
      <div className="flex flex-col gap-3 text-richblack-5 items-center mx-auto">
         <h1 className="text-4xl">
            Get in Touch
         </h1>
         <p className="text-richblack-300">
            We'd love to here for you,please fill out this form.
         </p>
      <div className="w-11/12">
          <ContactUsForm/>
      </div>
      </div>
   )
}

export default ContactFormSection;