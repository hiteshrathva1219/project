import React from "react";
import RenderSteps from "./RenderSteps"

const AddCourses=()=>{
   return (
     <div>
           <div className="flex flex-row  justify-evenly mx-auto gap-1 lg:w-[1200px]">
            <div className="flex flex-col justify-between gap-5">
                <h1 className="text-2xl text-richblack-5 font-bold mb-5">Add Courses</h1>
                <div className="w-[600px]">
                    <RenderSteps/>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-richblack-5 w-[30%] bg-richblack-700 h-fit rounded-md p-3">
                <p className="text-xl font-semibold text-richblack-5">Code Upload Tips</p>
                <ul className="text-richblack-200 flex flex-col gap-2">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
           </div>
     </div>
   )
}

export default AddCourses;