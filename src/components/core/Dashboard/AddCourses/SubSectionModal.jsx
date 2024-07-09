import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { getFormSubmissionInfo } from "react-router-dom/dist/dom";
import { setCourse } from "../../../../slices/courseSlice";
import { updateSection } from "../../../../services/operations/courseDetailsAPI";
import {
    createSubSection,
    updateSubSection,
  } from "../../../../services/operations/courseDetailsAPI"
import Upload from "./Upload";
import { RxCross1 } from "react-icons/rx";
import IconBtn from "../../../common/IconBtn";

export default function SubSectionModal({
    modalData,
    setModalData,
    add=false,
    view=false,
    edit=false,})
    {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    }=useForm();

    const dispatch=useDispatch();
    const [loading,setloading]=useState(false);
    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);

    useEffect(()=>{
        if(view || edit){
            setValue("lecturetitle",modalData.title);
            setValue("lectureDesc",modalData.description);
            setValue("lectureVideo",modalData.videoUrl);
        }
    },[]);
    
    const isFormUpdated = ()=>{
        const currentValues=getValues();
        if(currentValues.lecturetitle!==modalData.lecturetitle || currentValues.lectureDesc!==modalData.description || currentValues.lectureVideo!==modalData.videoUrl){
            return true;
        }
        else{
        return false;
        }
      }

    const handleEditSubSection = async()=>{
        const currentValues=getValues();

        const formData=new FormData();
        formData.append("sectionId",modalData.sectionId);
        formData.append("subSectionId",modalData._id);

        if(currentValues.lecturetitle!==modalData.title){
            formData.append("title",currentValues.lecturetitle);
        }
        if(currentValues.lectureDesc!==modalData.description){
            formData.append("description",currentValues.lectureDesc);
        }
        if(currentValues.lectureVideo!==modalData.videoUrl){
            formData.append("video",currentValues.lectureVideo);
        }
        setloading(true);
        const result=updateSubSection(formData,token);
        if(result){
            dispatch(setCourse(result));
        }
        setModalData(null);
        setloading(false);
    }
    const onSubmit = async(data)=>{
        if(view)
            return;
        if(edit){
            if(!isFormUpdated){
                toast.error("No changes made to the error");

            }
            else{
                handleEditSubSection(data);
            }
            return;
        }

       const formData = new FormData();
       formData.append("sectionId",modalData);
       formData.append("title",data.lecturetitle);
       formData.append("description",data.lectureDesc);
       formData.append("video",data.lectureVideo);
       setloading(true)

       const result=await createSubSection(formData,token);
       console.log(result);
       console.log(course);
       if(result){
        const updatedCourseContent = course.courseContent.map((section) =>
            section._id === modalData ? result : section
          )
          const updatedCourse = { ...course, courseContent: updatedCourseContent }
          console.log(updatedCourse);
          dispatch(setCourse(updatedCourse));
       }
       setModalData(null);
       setloading(false);
    }
    return (
        <div>
            <div className="bg-richblack-800 w-full translate-y-[-70%] translate-x-[10%] rounded-md flex flex-col justify-between gap-3 p-2">
                <div className="flex flex-row justify-between w-full items-center mb-5">
                    <p className="text-richblack-5 text-xl">{view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lectures</p>
                    <button onClick={()=>(!loading ? setModalData(null):{})} className="text-richblack-5 text-md">
                        <RxCross1/>
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between gap-3">
                    <Upload
                      name="lectureVideo"
                      label="Lecture Video"
                      register={register}
                      setValue={setValue}
                      errors={errors}
                      video={true}
                      viewData={view?modalData.videoUrl:null}
                      editData={edit?modalData.videoUrl:null}
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="lecturetitle" className="text-richblack-5 text-md font-semibold">Lecture Iitle</label>
                        <input id="lecturetitle"
                        placeholder="Enter Lecture Title"
                        {...register("lecturetitle",{required:true})}
                        className="w-full h-[40px] bg-richblack-700 rounded-lg px-2 py-1 text-richblack-5"/>
                    {
                        errors.lecturetitle && (<span>
                            Lecture Title is Required 
                        </span>)
                    }
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-richblack-5 text-md font-semibold">Lecture Description</label>
                        <textarea
                        id="lectureDesc"
                        placeholder="Enter Lecture Description"
                        {...register("lectureDesc",{required:true})}
                        className="w-full min-h-[130px] bg-richblack-700 rounded-md px-2 py-1 text-richblack-5"/>
                        {
                            errors.lectureDesc && (<span>
                                Lecture Description is required
                            </span>)
                        }
                    </div>
                    {
                        !view && (
                            <div className="flex flex-row justify-end">
                                <IconBtn text={loading?"Loading...":edit?"Save Changes":"Save"} type="submit"/>
                            </div>
                        )
                    }
                </form>
            </div>
        </div> 
    )
}