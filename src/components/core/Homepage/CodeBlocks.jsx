import React from "react";
import {FaArrowRight} from "react-icons/fa";
import {HightlightText} from "./HighlightText";
import CTAButton from "../Homepage/Button";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
    position,heading,subheading,ctabatn1,ctabatn2,codeblock,backgroundGradient,codeColor
})=>{
   return (
        <div className={`w-[100%] flex ${position} my-20 justify-between gap-2`}>
          {/*Section 1*/}
          <div className="w-[50%] flex flex-col gap-8">
            {heading}
            <div className="text-richblack-300 font-bold">
             {subheading}
            </div>  

            <div className="flex mt-7 gap-7">
               <CTAButton active={ctabatn1.active} linkto={ctabatn1.linkto}>
                  <div className="flex gap-2 items-center">
                        {ctabatn1.btntext}
                        <FaArrowRight/>
                  </div>
               </CTAButton>
               <CTAButton active={ctabatn2.active} linkto={ctabatn2.linkto}>
                  <div className="flex gap-2 items-center">
                        {ctabatn2.btntext}
                        <FaArrowRight/>
                  </div>
               </CTAButton>
            </div>
        </div>
          {/*Section 2*/}
          <div className='h-fit flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'>
              <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
               <p>1</p>
               <p>2</p>
               <p>3</p>
               <p>4</p>
               <p>5</p>
               <p>6</p>
               <p>7</p>
               <p>8</p>
               <p>9</p>
               <p>10</p>
               <p>11</p>
              </div>
              
               <div className={`w-[90%] flex flex-col gap-5 font-bold font-mono ${codeColor} pr-2`}>
                  <TypeAnimation
                    sequence={[codeblock,1000,""]}
                    repeat={Infinity}
                    cursor={true}
                    style={
                      {
                         whitespace:"pre-line",
                         display:"block",
                      }
                    }
                    omitDeletionAnimation={true}
                   >
                   </TypeAnimation>  
              </div>
          </div>
       </div> 
   )
}

export default CodeBlocks;