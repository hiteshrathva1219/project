import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "./Button"
import {FaArrowRight} from "react-icons/fa"
import Instructor from "../../../assest/images/Instructor.png"


const InstructorSection = ()=>{
    return (
        <div className="mt-[75px] mb-[10px]">
            <div className="flex flex-row gap-20 items-center">

             <div className="w-[60%]">
                <img src={Instructor} alt="" 
                className="shadow-white"/>
             </div>   

             <div className="flex flex-col gap-10 items-start">
                <div className="text-4xl font-semibold w-[50%]">
                    Become an
                    <HighlightText text={"Instructor"}/>
                </div>

                <p className="font-medium text-[16px] w-[80%] text-richblack-300">
                    Instructor from around the world teach millions of students on StudyNotion,We provide the tools and skills to teach what you love.
                </p>
                 
                <div className="w-fit transition-all duration-200 hover:scale-90">
                <CTAButton active={true} linkto={"/signup"}>
                   <div className="flex flex-row gap-3">
                      Start Learning Today
                      <FaArrowRight/>
                   </div>
                </CTAButton>
                </div> 
             </div>

            </div>
           
        </div>
    )

}

export default InstructorSection;