import React, { useDebugValue, useState } from "react"; 
import { useForm } from "react-hook-form";
import RequirementField from "./RequirementField";
import IconBtn from "../../../common/IconBtn";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setEditCourse, setStep } from "../../../../slices/courseSlice";
import { updateSection } from "../../../../services/operations/courseDetailsAPI";
import { editCourseDetails } from "../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../slices/courseSlice";
import { createSection } from "../../../../services/operations/courseDetailsAPI";
import NestedView from "./NestedView";
import toast from "react-hot-toast";
import { FaGalacticSenate } from "react-icons/fa";

  const CourseBuilderForm = ()=>{
     
      const {
          handleSubmit,
          register,
          setValue,
         formState:{errors},
     }=useForm();

     const [editSectionName,SeteditSectionName]=useState(null);
     const {course}=useSelector((state)=>state.course);
     const dispatch=useDispatch();
     const [loading,setloading]=useState(false);
     const {token}=useSelector((state)=>state.auth);
     const cancelEdit = ()=>{
        SeteditSectionName(null);
          setValue("sectionName","");
      }
      const goBack=()=>{
          dispatch(setStep(1));
          dispatch((setEditCourse(true)));
      }
      const goToNext=()=>{
         if(course.courseContent.length===0){
          toast.error("Please add atleast one Section");
          return;
         }
         if(course.courseContent.some((section)=>section.subSection.length===0)){
          toast.error("Please add atleast one lecture in each section");
           return;
         }
         dispatch(setStep(3));
      }
      const handleChangeEditSectionName =(sectionId,sectionName)=>{
        if(editSectionName===sectionId){
            cancelEdit();
            return;
        }
        SeteditSectionName(sectionId);
        setValue("sectionName",sectionName);
      }
      const onSubmit = async (data)=>{
        setloading(true);
        let result;
        if(editSectionName){
            result=await updateSection(
                {
                    sectionName:data.sectionName,
                    sectionId:editSectionName,
                    courseId:course._id,
                },token
            )
        }
        else{
            result=await createSection({
                sectionName:data.sectionName,
                courseId:course._id,
            },token);
        }
        console.log(result);
        if(result){
            console.log("12")
            dispatch(setCourse(result));
            SeteditSectionName(null);
            setValue("sectionName","");
        }
        setloading(false);
      }
      return (
          <div className="bg-richblack-800 h-fit flex flex-col gap-2 p-3 w-full rounded-md"> 
              <h1 className="text-richblack-5 text-2xl font-semibold">Course Builder</h1>
             <form onSubmit={handleSubmit(onSubmit)}> 
                 <div className="flex flex-col gap-2">
                     <label htmlFor="sectionName" className="text-richblack-5">Section Name<sup className=" text-pink-300 text-md">*</sup></label>
                      <input id="sectionName"
                      name="sectionName"
                      placeholder="Add section name"
                    {...register("sectionName",{required:true})}
                     className="w-full  h-[40px] p-2 rounded-lg bg-richblack-700 text-richblack-5"/>
                      {
                      errors.sectionName && (
                              <span>Section Name is required</span>
                       )}
                  </div>
                 <div className="mt-10 flex flex-row gap-1">
                      <IconBtn type="submit" disabled={loading} text={editSectionName ? "Edit Section Name":"Create Section"}
                     outline={true}
                     customClasses={"w-fit bg-richblack-700"}/>
                     {/* <MdAddCircleOutline className="translate-x-[-70%] translate-y-[50%]" size={20}/> */}
                     {
                         editSectionName && (
                             <button
                                 type="button"
                                 onClick={cancelEdit}
                                 className="text-sm text-richblack-300 underline ml-5"
                             >
                                 Cancel Edit
                             </button>
                     )}
                 </div>
             </form>
             {
                 course.courseContent.length > 0 && (
                     <NestedView handleChangeEditSectionName={handleChangeEditSectionName}/>
                 )
             }
             <div className="flex flex-row justify-end gap-3 ">
                 <button onClick={goBack} className="w-[60px] bg-richblack-500 h-[35px] rounded-lg">
                      Back
                 </button>
                 <button onClick={goToNext} className="w-[60px] bg-yellow-25 h-[35px] rounded-lg">
                      Next
                 </button>
    
             </div>
        </div>
    )

} 

export default CourseBuilderForm;