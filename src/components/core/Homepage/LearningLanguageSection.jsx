import React from "react";
import HighlightText from "./HighlightText";
import Know_your_progress from "../../../assest/images/Compare_with_others.png"
import compare_with_others from "../../../assest/images/Know_your_progress.png"
import plan_your_lesson from "../../../assest/images/Plan_your_lessons.png"
import CTAButton from "./Button";
const LearningLanguageSection = ()=>{
  return (
    <div className="mt-[130px]">
       <div className="flex flex-col gap-5 items-center">
         
         <div className="text-4xl font-semibol text-center">
             Your swiss knife for
             <HighlightText text={"learning any language"}/>
         </div>

         <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[55%]">
           Using spin making learning multiple language easy, with 20+ language realistic voice-over,
           progress tracking,custom shcedule ans more.
         </div>
         
          <div className="flex flex-row items-center justify-center mt-5">
             
              <img src={compare_with_others} alt="KnowYourProgree" 
              className="object-contain -mr-32"/>
              
             <img src={Know_your_progress} alt="KnowYourProgree" 
             className="object-contain -mr-28"/>

             <img src={plan_your_lesson} alt="KnowYourProgree" 
             className="object-contain -ml-10"/>  
          </div>

          <div className="transition-all duration-200 hover:scale-90 mb-10">
             <CTAButton
             active={true} linkto={"/signup"}>
                Learn more
             </CTAButton>
          </div>
       </div>
    </div>
  )
}

export default LearningLanguageSection;