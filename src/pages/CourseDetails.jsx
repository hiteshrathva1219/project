import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../components/common/ConfirmationModal"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/courses/CourseAccordionBar"
import CourseDetailsCard from "../components/core/courses/CourseDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
import { buyCourse } from "../services/operations/studentFeatures"
import GetAvgRating from "../assest/utils/avgRating"
import Error from "./Error"

const CourseDetails = ()=>{
    
    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const { loading } = useSelector((state) => state.profile)
    // const { paymentLoading } = useSelector((state) => state.course)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const courseId="667eb701ad77f6e65b9ec42b";

    const [courseData,setCourseData]=useState(null);
    const [confirmationModal,setConfirmationModal]=useState(null);
     
    useEffect(()=>{
        const getCourseFullDetails=async()=>{
            try {
        const result=await fetchCourseDetails(courseId);
                setCourseData(result);

            } catch (error) {
                console.log("Could not fetch course details");
            }
        }
        getCourseFullDetails();
        
    },[courseId]);

    const [avgReviewCount,setavgReviewCount]=useState(0);
    useEffect(()=>{
      const count=GetAvgRating(courseData?.data?.ratingAndReviews);
      setavgReviewCount(count);
    },[courseData]);

    const [totalNoOfLectures,setTotalNoOfLectures]=useState(0);
    const [isActive, setIsActive] = useState(Array(0));
    const handleActive = (id) => {
        setIsActive(
          !isActive.includes(id)
            ? isActive.concat([id])
            : isActive.filter((e) => e != id)
        )
    }    
    useEffect(()=>{
        let lectures=0;
        courseData?.data?.courseContent?.forEach((sec)=>{
            lectures+=sec.subSection.length || 0;
        })
        setTotalNoOfLectures(lectures);
    },[courseData]);
    
    
  if (loading || !courseData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!courseData.success) {
    return <Error />
  }
   console.log(courseData);
    const {
        _id:course_id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentEnrolled,
        createdAt,
    }=courseData?.data;
    const handleBuyCourse = ()=>{
        if (token) {
            buyCourse(token, [courseId], user, navigate, dispatch)
            return;
        } 
        setConfirmationModal({
            text1: "You are not logged in!",
            text2: "Please login to Purchase Course.",
            btn1Text: "Login",
            btn2Text: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),
        })
    }
    // if (paymentLoading) {
    //     // console.log("payment loading")
    //     return (
    //       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
    //         <div className="spinner"></div>
    //       </div>
    //     )
    // }
    return (
        <>
         <div className="flex flex-col justify-between gap-2 mx-auto h-fit w-full">
             <div className="relative flex flex-col  justify-start gap-2 rounded-md mx-auto bg-richblack-800 h-[500px] w-full">
             <div className={`ml-20 flex flex-col justify-between items-start my-auto  gap-3 py-5 text-lg text-richblack-5`}>
                  <div>
                    <p className="text-3xl font-bold text-richblack-5 sm:text-[40px]">
                      {courseName}
                    </p>
                  </div>
                  <p className={`text-richblack-200`}>{courseDescription}</p>
                  <div className="text-md flex flex-wrap items-center justify-between gap-2">
                    <span className="text-yellow-25">{avgReviewCount}</span>
                    <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                    <span>{`(${ratingAndReviews.length} reviews)`}</span>
                    <span>{`${studentEnrolled.length} students enrolled`}</span>
                  </div>
                  <div>
                    <p className="text-md">
                      Created By {`${instructor.firstName} ${instructor.lastName}`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 text-md">
                    <p className="flex items-center gap-2">
                      {" "}
                      <BiInfoCircle /> Created at {formatDate(createdAt)}
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <HiOutlineGlobeAlt /> English
                    </p>
                  </div>
             </div>
             <div className="right-[3rem] top-[40px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
                <CourseDetailsCard
                  course={courseData?.data}
                  setConfirmationModal={setConfirmationModal}
                  handleBuyCourse={handleBuyCourse}
                />
              </div>
             </div>
             <div className="my-8 border border-richblack-600 p-8 w-[60%] text-richblack-5 ml-5 rounded-md">
                <p className="text-3xl font-semibold">What you'll learn</p>
                <div className="mt-5 text-caribbeangreen-100">
                  {whatYouWillLearn}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-[60%] ml-10">
                  <p className="text-[28px] font-semibold text-richblack-5">Course Content</p>
                  <div className="flex flex-wrap justify-between gap-2">
                    <div className="flex gap-2 text-richblack-5">
                      <span>
                        {courseContent.length} {`section(s)`}
                      </span>
                      <span>
                        {totalNoOfLectures} {`lecture(s)`}
                      </span>
                      <span>{courseData.data?.totalDuration} total length</span>
                    </div>
                    <div>
                      <button
                        className="text-yellow-25"
                        onClick={() => setIsActive([])}
                      >
                        Collapse all sections
                      </button>
                    </div>
                  </div>
                </div>
              <div className="py-4 w-[60%] ml-10">
                  {courseContent?.map((course, index) => (
                    <CourseAccordionBar
                      course={course}
                      key={index}
                      isActive={isActive}
                      handleActive={handleActive}
                    />
                  ))}
              </div>
              <div className="mb-12 py-4 ml-10">
                  <p className="text-[28px] font-semibold text-richblack-5">Author</p>
                  <div className="flex items-center gap-4 py-4">
                    <img
                      src={
                        instructor.image
                          ? instructor.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                      }
                      alt="Author"
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <p className="text-lg text-richblack-5">{`${instructor.firstName} ${instructor.lastName}`}</p>
                  </div>
                  <p className="text-richblack-50">
                    {instructor?.additionalDetails?.about}
                  </p>
                </div>
         </div>
         </>
      )
}

export default CourseDetails;