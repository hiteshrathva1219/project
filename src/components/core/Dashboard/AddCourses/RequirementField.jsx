import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const RequirementField = ({name,label,register,errors,setValue,getValues})=>{
    const [requirement,setRequirement]=useState("");
    const [requirementList,setRequirementList]=useState([]);
    const {course,editCourse}=useSelector((state)=>state.course);
    
   

    useEffect(() => {
      if (editCourse) {
        setRequirementList(course?.courseDetails?.instructions)
      }
      register(name, { required: true, validate: (value) => value.length > 0 })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
      useEffect(()=>{
        register(name,{
            required:true,
            validate:(value)=>value.length>0
        })
      },[])
      
      useEffect(() => {
        setValue(name, requirementList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [requirementList])
  
     const handleAddRequirement = ()=>{
       console.log(requirement);
        if(requirement){
            setRequirementList([...requirementList,requirement])
            setRequirement("")
        }
     }

     const handlerRemoveRequirement = (index)=>{
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index,1);
        setRequirementList(updatedRequirementList);
     }

     return (
         <div className="w-[100%] flex flex-col gap-2">
              <label className="text-richblack-5 text-xl font-semibold" htmlFor={name}>{label}<sup>*</sup></label>
              <div>
                  <input
                    type="text"
                    id={name}
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                   className="w-full bg-richblack-700 text-richblack-5 rounded-lg h-[40px]"/>
                  <button
                  type="button"
                  onClick={handleAddRequirement}
                  className="w-[100px] bg-yellow-25 mt-2 h-[30px] mx-auto text-center rounded-full">
                    Add
                  </button>
              </div>
              {
                requirementList.length > 0 && (
                    <ul>
                       {
                          requirementList.map((requirement,index)=>(
                            <li key={index} className="flex flex-row gap-2 items-center text-lg">
                                <span className="text-richblack-5 gap-2">{requirement}</span>
                                <button
                                type="button"
                                onClick={()=>handlerRemoveRequirement(index)}
                                className="text-sm text-pure-greays-300 text-richblack-5">
                                    clear
                                </button>
                            </li>
                          ))
                       } 
                    </ul>
                )
              }
             {errors[name] && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
               {label} is required
              </span>
              )}
                
         </div>
     )
}
export default RequirementField;