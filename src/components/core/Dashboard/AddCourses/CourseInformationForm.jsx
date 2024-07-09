import React, { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn"
import RequiredmentField from "./RequirementField"
import { setStep,setCourse } from "../../../../slices/courseSlice";
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { COURSE_STATUS } from "../../../../assest/utils/constants"
import Upload from "./Upload";
import ChipInput from "./ChipInput";
import {
    addCourseDetails,
    editCourseDetails,
    fetchCourseCategories,
  } from "../../../../services/operations/courseDetailsAPI"
  
import toast from "react-hot-toast";
import { FaLessThanEqual } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";

const CourseInformationForm = ()=>{
    
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    }=useForm();
    
    const dispatch = useDispatch();
    const {token}=useSelector((state)=>state.auth);
    const {course,editCourse}=useSelector((state)=>state.course);
    const [loading,setloading]=useState(false);
    const [courseCategories,setCourseCetegories]=useState([]);
    console.log(course);
    console.log(editCourse);
    useEffect(()=>{
        const getCategories = async()=>{
            setloading(true);
            const categories = await fetchCourseCategories();
            console.log("course-categories->",categories);
            if(categories){
                setCourseCetegories(categories);
            }
            setloading(false);
        }
        if(editCourse){
            setValue("courseTitle",course?.courseDetails.courseName);
            setValue("courseShortDesc",course?.courseDetails.courseDescription);
            setValue("coursePrice",course?.courseDetails.price);
            setValue("courseTags",course?.courseDetails.tag);
            setValue("courseBenfits",course?.courseDetails.whatYouWillLearn);
            setValue("courseCategory",course?.courseDetails.Category);
            setValue("courseRequirements",course?.courseDetails.instructions);
            setValue("courseImage",course?.courseDetails.thumbnail);
        }
         getCategories();
    },[])

      const isFormUpdated = ()=>{
        const currentValues=getValues();
        if(currentValues.courseTitle!==course?.courseDetails.courseName || 
            currentValues.courseShortDesc!==course?.courseDetails.courseDescription ||
            currentValues.coursePrice!==course?.courseDetails.price ||
            currentValues.courseTags.toString() !== course?.courseDetails.tag.toString() ||
            currentValues.courseBenefits!==course?.courseDetails.whatYouWillLearn ||
            currentValues.courseCategory!==course?.courseDetails.Category ||
            currentValues.courseRequirements.toString()!==course?.courseDetails.instructions.toString() ||
            currentValues.courseImage !== course?.courseDetails.thumbnail
        ){
        return true;
        }
        return false;
      }
      const onSubmit = async(data)=>{
           if(editCourse){
            if(isFormUpdated()){
            const currentValues=getValues();
            const formData=new FormData();

            formData.append("courseId",course?.courseDetails._id);
            if(currentValues.courseTitle!==course?.courseDetails.courseName){
                formData.append("courseName",data.courseTitle);
            }
            if(currentValues.courseShortDesc!==course?.courseDetails.courseDescription){
                formData.append("courseDescription",data.courseShortDesc);
            }
            if(currentValues.coursePrice!==course?.courseDetails.price){
                console.log(currentValues.coursePrice);
                console.log(data.coursePrice);
                formData.append("price",data.coursePrice);
            }
            if(currentValues.courseBenefits!==course?.courseDetails.whatYouWillLearn){
                formData.append("whatYouWillLearn",data.courseBenefits);
            }
            if(currentValues.tag!==course?.courseDetails.tag){
                formData.append("courseTags",course?.courseDetails.tag);
            }
            // if(currentValues.courseCategory._id!==course.Category._id){
            //     formData.append("category",data.courseCategory);
            // }
            if(currentValues.courseRequirements.toString()!==course?.courseDetails.instructions.toString()){
                formData.append("instructions",JSON.stringify(data.courseRequirements));
            }
            setloading(true);
             const result=await editCourseDetails(formData,token);
            setloading(false);
            if(result){
                dispatch(setStep(2));
                dispatch(setCourse(result));
            }
           }  
           else {
             toast.error("No Changes made so far")
           }
           return;
        }
        console.log(data);
        const formData=new FormData();
        formData.append("courseName",data.courseTitle)
        formData.append("courseDescriptions",data.courseShortDesc)
        formData.append("price",data.coursePrice)
        formData.append("tag", JSON.stringify(data.courseTags))
        formData.append("whatYouWilLearn",data.courseBenfits)
        formData.append("category",data.courseCategory)
        formData.append("courseRequirements",JSON.stringify(data.courseRequirements))
        formData.append("status",COURSE_STATUS.DRAFT)
        formData.append("thumbnail", data.courseImage)
        setloading(true);
        const result = await addCourseDetails(formData,token)
        if(result){
            dispatch(setStep(2));
            console.log("result",result);
            dispatch(setCourse(result));
        }
        setloading(false);
        console.log("Printing Data",formData);
      }
    return (
       <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8 "
        >

          <div className="flex flex-col gap-2">
            <label className="text-richblack-5 text-xl font-semibold">Course Title</label>
            <input
              id="courseTitle"
              placeholder="Enter Course Title"
              {...register("courseTitle",{required:true})}
              className="w-full bg-richblack-700 text-richblack-5 h-[40px] p-2 rounded-lg"
            />
            {
                errors.courseTitle && (
                    <span className="text-brown-300">Course Title is Required<sup>*</sup></span>
                )
            }
         </div> 
         <div className="flex flex-col gap-2">
            <label className="text-richblack-5 text-xl font-semibold">Course Short Description</label>
            <textarea
              id="courseShortDesc"
              placeholder="Enter Description"
              {...register("courseShortDesc",{required:true})}
              className="min-h-[140px] w-full  bg-richblack-700 text-richblack-5 h-[40px] p-2 rounded-lg"
            />
            {
                errors.courseShortDesc && (<span className="text-brown-300">
                    Course Description is required
                </span>)
            }
         </div>

         <div className="flex flex-col gap-2 relative">
            <label className="text-richblack-5 text-xl font-semibold">Course Price<sup>*</sup></label>
            <input
              id="coursePrice"
              placeholder="Enter Course Price"
              {...register("coursePrice",{
                required:true,
                valueAsNumber:true,
            })}
              className="w-full  bg-richblack-700 text-richblack-5 h-[40px] px-7 rounded-lg"
            />
            {/* <HiOutlineCurrencyRupee className="translate-y-[-190%] translate-x-[12%] text-xl text-richblack-400"/> */}
            {
                errors.coursePrice && (
                    <span className="text-brown-300">Course Price is Required<sup>*</sup></span>
                )
            }
         </div> 

         <div className="flex flex-col gap-2">
             <label className="text-richblack-5 text-xl font-semibold">Course Category<sup>*</sup> </label>
             <select id="courseCategory"
              defaultValue=""
              {...register("courseCategory",{required:false})} className="h-[40px] bg-richblack-700 rounded-md text-richblack-300">
                 <option value="" disabled>Choose a Category</option>
                 {
                    !loading && courseCategories.map((category,index)=>(
                        
                       <option key={index} value={category?._id} className="text-richblack-5">
                         {category?.name} 
                       </option>
                    ))
                 }
              </select>
              {
                errors.courseCategory && (
                    <span className="text-brown-300">
                        Course Category is required
                    </span>
                )}
         </div>
         <ChipInput
          label="Tags"
          name="courseTags"
          id="courseTags"
          placeholder="Enter tags ans press enter"
          register={register}
          errors={errors}
          setValue={setValue}
          getValue={getValues}
         />
        <Upload
        name="courseImage"
        label="Course Thumbnail"
        id="courseImage"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
         />
         <div className="flex flex-col gap-2">
             <label className="text-richblack-5 text-xl">Benefits of the course<sup>*</sup></label>
             <textarea 
              id="coursebenefits"
              placeholder="Enter Benefits of the course"
              {...register("courseBenfits",{required:true})}
              className="min-h-[130px] w-full  bg-richblack-700 text-richblack-5 rounded-lg p-2"
             />
             {
                errors.courseBenefits && (
                    <span className="text-brown-300">
                        Benefits of the course are required**
                    </span>
                )}
         </div>

          <RequiredmentField
            name="courseRequirements"
            id="courseRequirements"
            label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValue={getValues}
          />
          <div className="flex flex-row gap-2 justify-end">
            {
                editCourse && (
                    <button onClick={()=>dispatch(setStep(2))}
                    className="flex items-center gap-x-2 bg-richblack-700 text-richblack-5 h-fit w-fit p-2 rounded-md">
                        Continue Without Saving
                    </button>
                )
            }
            {
                editCourse ? (<button type="submit" className="bg-yellow-25 h-fit w-fit p-2 rounded-md">Next</button>):(<button type="submit" className="bg-yellow-25 w-fit h-fit p-2 text-richblack-5 rounded-md">
                    Save Changes
                </button>)
            }
          </div>
       </form>
    )
}

export default CourseInformationForm;