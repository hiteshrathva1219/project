import React, { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar"
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import { useNavigate } from "react-router-dom";



const EnrolledCourses = ()=>{

    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const [enrolledCourses,setEnrolledCourses] = useState(null);
    const navigate=useNavigate();
     const getEnrolledCourses = async()=>{
        try{
            const response = await getUserEnrolledCourses(user._id,token);
            setEnrolledCourses(response);
        }
        catch(error){
           console.log("Unable to Fetch Enrolled Courses");
        }
     }
     useEffect(()=>{
        getEnrolledCourses();
     },[]);

     return (
        <div>
             <div className="text-3xl text-richblack-50  ml-20">Enrolled Courses</div>
             {
                !enrolledCourses ? (<div className="text-xl text-richblack-5 text-center">
                    Loading...
                </div>):!enrolledCourses.length ? (<p className="text-2xl text-center text-richblack-5">You have not enrolled in any course yet</p>):(
                    <div className="my-8 ml-20  text-richblack-5">
                        <div className="flex justify-between gap-2 rounded-t-lg bg-richblack-500 ">
                            <p className="text-md p-2">Course Name</p>
                            <p className="text-md p-2">Duration</p>
                            <p className="text-md w-[22%] p-2">Progress</p>
                        </div>
                        {
                            enrolledCourses.map((course,key)=>(
                                <div className="flex border border-richblack-700 w-full justify-between gap-2 cursor-pointer" onClick={()=>{
                                    navigate(`/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`)
                                }}>
                                <div className="flex flex-row gap-1">    
                                <img src={course.thumbnail} alt="" className="h-[90px] w-[100px] m-2 rounded-md object-cover"/>
                                <div className="flex max-w-xs flex-col gap-2 mt-2">
                                    <p className="text-2xl font-semibold">{course.courseName}</p>
                                    <p className="text-xs text-richblack-300">{course.courseDescription}</p>
                                </div>
                                </div>
                                    {/* <div className="text-richblack-5 ml-10 mt-2">
                                        2h 30min
                                    </div> */}
                                    <div className="flex w-1/5 flex-col gap-2 px-2 py-3 mr-3">
                                        <p>Progress:{course.progresspercentage || 0}%</p>
                                        <ProgressBar completed={course.progresspercentage || 0}
                                         height="8px"
                                         isLabelVisible={false}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
             }
        </div>
     )
}

export default EnrolledCourses;