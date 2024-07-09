import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
// import { setCourse } from "../../../slices/courseSlice";
import IconBtn from "../../common/IconBtn";
import CourseTable from "./InstructorCourses/CourseTable";


const MyCourses = ()=>{
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const [courses,setCourses]=useState([]);
    const {user}=useSelector((state)=>state.profile);

    useEffect(()=>{
        const fetchCourses = async()=>{
            const result=await fetchInstructorCourses(user,token);
            console.log(result);
            if(result){
                setCourses(result);
            }
        }
        fetchCourses();
    },[]);

    return (
        <div>
            <div className="flex flex-row text-richblack-5 mx-auto gap-10 justify-between w-[70%] items-center">
                <h1 className="text-2xl">My Courses</h1>
                <IconBtn text="Add Course" onclick={()=>navigate("/dashboard/add-course")}/>
            </div>
            {   
                courses && <CourseTable courses={courses} setCourses={setCourses}/>
            }
        </div>
    )
}

export default MyCourses;