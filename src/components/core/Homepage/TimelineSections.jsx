import React from "react";
import logo1 from "../../../assest/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assest/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assest/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assest/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assest/images/TimelineImage.png"
const timeline = [
    {
        LOGO:logo1,
        heading:"Leadership",
        Description:"Lorem ipsum dolor sit amet consectetur"
    },
    {
        LOGO:logo2,
        heading:"Leadership",
        Description:"Lorem ipsum dolor sit amet consectetur"
    },
    {
        LOGO:logo3,
        heading:"Leadership",
        Description:"Lorem ipsum dolor sit amet consectetur"
    },
    {
        LOGO:logo4,
        heading:"Leadership",
        Description:"Lorem ipsum dolor sit amet consectetur"
    }
]

const TimelineSection = ()=>{
  return (
    <div className="flex flex-row gap-15 items-center">
         <div className="w-[45%] flex flex-col gap-5">
           {
             timeline.map((element,index)=>{
                return (
                   <div className="flex flex-row gap-6" key={index}>
                     
                     <div className="w-[50px] h-[50px] bg-white flex items-center">
                         <img src={element.LOGO}/>  
                     </div>
                     <div>
                        <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                        <p className="text-base">{element.Description}</p>
                     </div>
                   </div>
                )
             })
           }  
        </div> 

        <div className="relative shadow-blue-200">
            <img src={timelineImage}
             alt="timelineImage"
             className="shadow-white object-cover h-fit"/>

             <div className="flex flex-row absolute bg-caribbeangreen-700 text-white uppercase py-7 left-[50%] translate-x-[-45%] translate-y-[-40%]">
                <div className="flex flex-row gap-3 items-center border-r border-caribbeangreen-300 px-7">
                      <p className="text-3xl font-bold">10</p>
                      <p className="text-sm text-caribbeangreen-300">Years of Experience</p>
                </div>
                <div className="flex flex-row gap-3 items-center px-7">
                      <p className="text-3xl font-bold">250</p>
                      <p className="text-sm text-caribbeangreen-300">Type of Courses</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default TimelineSection;