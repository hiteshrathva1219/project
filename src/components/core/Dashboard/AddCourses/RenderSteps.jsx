import React from "react"
import { useSelector } from "react-redux"
import CourseInformationForm from "./CourseInformationForm"
import {FaCheck} from "react-icons/fa"
import CourseBuilderForm from "./CourseBuilderForm"
import PublishCourse from "./PublishCourse"
const RenderSteps = ()=>{

    const { step }= useSelector((state)=>state.course);
    const steps=[
        {
            id:1,
            title:"Course Information",
        },
        {
            id:2,
            title:"Course Builder",
        },
        {
            id:3,
            title:"Publish",
        },
    ]

    return (
        <div className="flex flex-col justify-between gap-3 h-fit w-[100%]">
              <div className="flex flex-row justify-between w-[100%]">
                {
                    steps.map((item)=>(
                     <div> 
                       <div className="">
                         <div className={`${step===item.id? "border-yellow-50 text-yellow-50 h-[35px] bg-yellow-800 w-[35px] rounded-full px-3 py-2":"border-richblack-700 bg-richblack-800 text-richblack-300 h-[35px] w-[35px] rounded-full px-3 py-2"}`}>
                            {
                                step>item.id ? (<FaCheck/>):(item.id)
                            }
                        </div>
                       </div>
                       {/* Add Codefor dashes between the labels */}
                     </div>
                    ))}
              </div>

              <div className="flex flex-row justify-between w-[100%] mb-10">
                 {
                    steps.map((item)=>(
                        <div>
                            <div className="text-center">
                             <p className="text-richblack-5">{item.title}</p>
                            </div>
                        </div>
                    ))}
              </div>
              {step===1 && <CourseInformationForm/>}
              {step===2 && <CourseBuilderForm/>}
              {step===3 && <PublishCourse/>}
        </div>
    )
}

export default RenderSteps;