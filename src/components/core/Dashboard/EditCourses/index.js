import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { setCourse, setEditCourse } from "../../../../slices/courseSlice";
import RenderSteps from "../AddCourses/RenderSteps";

export default function EditCourse(){
    const dispatch=useDispatch();
    const {courseId}=useParams();
    const {course}=useSelector((state)=>state.course);
    const [loading,setloading]=useState(false);
    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);

    useEffect(()=>{
        const populateCourseDetails = async()=>{
            setloading(true);
            const result=await getFullDetailsOfCourse(user._id,courseId,token);
            console.log(result);
            if(result){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result));
            }
            setloading(false);
        }
        populateCourseDetails();
    },[])

    if(loading){
        return (
            <div className="text-richblack-5">
                Loading...
            </div>
        )
    }

    return (
        <div>
             <h1>Edit Course</h1>
             <div className="flex flex-row items-center justify-center mx-auto lg:w-[800px]">
                {
                    course?(<RenderSteps/>):(<p className="text-richblack-5 text-2xl">Course Not Found</p>)
                }
             </div>
        </div>
    )

}