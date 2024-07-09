import React, { useEffect, useState } from "react"; 
import { useForm } from "react-hook-form";
import IconBtn from "../../../common/IconBtn";
import { resetCourseState, setStep } from "../../../../slices/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_STATUS } from "../../../../assest/utils/constants";
import { editCourseDetails } from "../../../../services/operations/courseDetailsAPI";
import { useNavigate } from "react-router-dom";



const PublishCourse = ()=>{
   
    const [loading,setloading]=useState(false);
    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        if(course?.status===COURSE_STATUS.PUBLISHED){
            setValue("public",true);
        }
    },[]);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
    }=useForm();
    const goBack = ()=>{
        dispatch(setStep(2));
    }
    const goToCourses = ()=>{
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses");
    }
    const handleCoursePublish = async ()=>{
        if(course?.status===COURSE_STATUS.PUBLISHED && getValues("public")===true || (course.status===COURSE_STATUS.DRAFT && getValues("public")===false)){
            goToCourses();
            return;
        }
        const formData=new FormData();
        formData.append("courseId",course._id);
        const courseStatus=getValues("public")?COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
        formData.append("status",courseStatus);

        setloading(true);
        const result=await editCourseDetails(formData,token);
        if(result){
            goToCourses();
        }
        setloading(false);
    }
   return (
      <div className="rounded-md border-[1px] bg-richblack-800 p-6 border-richblack-700 text-white flex flex-col gap-4">
        <p className="text-richblack-5 text-xl">Publish Course</p>
        <form onClick={handleSubmit(handleCoursePublish)}>
            <div className="flex flex-row gap-1 items-center mb-10" onClick={(e)=>e.stopPropagation()}>
                <label htmlFor="public"></label>
                  <input type="checkbox"
                  id="public"
                  {...register("public")}
                 className="rounded h-4 w-4"/>
                <span>Make this Course as Public</span>
            </div>

            <div className="flex flex-row gap-2 justify-end">
                <button
                disabled={loading}
                type="button"
                onClick={goBack}
                className="items-center rounded-md te w-[50px] text-center bg-richblack-600">
                Back
                </button>
                <IconBtn disabled={loading} text="Save Changes" type={"submit"}/>
            </div>
        </form>
          
      </div>
    )
}

export default PublishCourse;