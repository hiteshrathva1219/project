import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_STATUS } from "../../../../assest/utils/constants";
import { deleteCourse, fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import ConfirmationModal from "../../../common/ConfirmationModal";

import {RiDeleteBin6Line} from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";



export default function CourseTable({courses,setCourses}){
     const dispatch=useDispatch();
     const {token}=useSelector((state)=>state.auth);
    const [loading,setloading]=useState(false);
    // const location=useLocation();
    const navigate=useNavigate();
    console.log(courses);
    const [confirmationModal,setConfirmationModal]=useState(null);
    
    const handleCourseDelete =async (courseId)=>{
        setloading(true);
        await deleteCourse({courseId:courseId},token);
        const result=await fetchInstructorCourses(token);
        if(result){
            setCourses(result);
            window.location.reload();
        }
        setConfirmationModal(null);
        setloading(false);
    }
    return (
        <div>
            <Table className="rounded-xl border border-richblack-800 w-full mt-10 ml-10">
                <Thead>
                        <Tr className="flex justify-between gap-x-36 ml-20 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">Courses</Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">Duration</Th>
                        <Th className=" text-left text-sm font-medium uppercase text-richblack-100">Price</Th>
                        <Th className=" text-left text-sm font-medium uppercase text-richblack-100">Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        courses.length===0?(
                            <Tr>
                                <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                                   No Courses Found
                                </Td>
                            </Tr>
                        ):(
                            courses?.map((course)=>(
                                <Tr key={course._id} className="flex flex-row justify-start gap-x-24 border-b border-richblack-800 py-8  w-full">
                                    <Td className="flex fle-row gap-x-2 w-[29%]">
                                    <img src={course?.thumbnail}
                                         className="h-[120px] w-[150px] rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                         <p className="text-lg font-semibold text-richblack-5">{course.courseName}</p>
                                         <p className="text-xs text-richblack-300">{course.courseDescription}</p>
                                         <p className="text-[12px] text-white">Created:</p>
                                         {
                                            course.status===COURSE_STATUS.DRAFT ? (
                                                <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">DRAFTED</p>
                                            ):(
                                                <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">PUBLISHED</p>
                                            )
                                         }
                                    </div>

                                    </Td>
                                    <div className="flex flex-row w-[60%] justify-between">
                                    <Td className="text-sm font-medium text-richblack-100 text-center">
                                        2hr 30min
                                    </Td>
                                    <Td className="text-sm font-medium text-richblack-100">
                                        {course?.price}
                                    </Td>
                                    <Td  className="text-sm font-medium text-richblack-100 flex flex-row items-center h-fit w-fit">
                                        <button
                                        disabled={loading}
                                        onClick={() => {
                                            navigate(`/dashboard/edit-course/${course._id}`)
                                        }}
                                        className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300">
                                            EDIT
                                        </button>
                                        <button disabled={loading} onClick={()=>{
                                            setConfirmationModal({
                                               text1:"Do you want to delete this cours?",
                                               text2:"All the related to this course data will be deleted",
                                               btn1Text:"Delete",
                                              btn2Text:"Cancel",
                                              btn1Handler:!loading?()=>handleCourseDelete(course._id):()=>{},
                                              btn2Handler:!loading?()=>setConfirmationModal(null):()=>{},
                                            })
                                        }}
                                        className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]">
                                        <RiDeleteBin6Line size={18} className="items-center" />
                                      </button>
                                    </Td>
                                 </div>
                                </Tr>
                            ))
                        )
                    }
                </Tbody>
            </Table>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
        </div>
    )
}