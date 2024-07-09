import React, { useState } from "react";
import {HomePageExplore} from "../../../assest/data/homepage-explore"
import HighlightText from "./HighlightText";
import e from "cors";
import CourseCard from "./CourseCard";

const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];
const ExploreMore = ()=>{
     
    const [currentTab,setCurrentTab] =useState(tabName[0]);
    const [courses,setCourses]=useState(HomePageExplore[0].courses);
    const [currCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);
    
    const setMyCards = (value)=>{
       setCurrentTab(value);
       const result = HomePageExplore.filter((courses) => courses.tag===value)
       setCourses(result[0].courses);
       setCurrentCard(result[0].courses[0].heading);
    }
    return ( 
      <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold text-center">
            Unlock the 
            <HighlightText text={"Power of Code"}/>
          </div>

          <p className="text-center text-richblack-300 text-sm text-[16px] mt-3">
            Learn to build anything you can imagine
          </p>

          <div className="flex flex-row rounded-full bg-richblack-800 mb-2 border-richblack-100 mt-5 px-1 py-1">
            {
                tabName.map((element,index)=>{
                    return (
                        <div className={`text-[16px] flex flex-row items-center gap-2
                        ${currentTab===element?"bg-richblack-900 text-richblack-5 font-medium"
                        :"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                        key={index}
                        onClick={()=>setMyCards(element)}
                        >
                            {element}
                        </div>
                    )
                })
            }
          </div>
          <div className="flex flex-row gap-5">
              {
                 courses.map((element,index)=>{
                  return (
                    <CourseCard key={index}
                    cardData={element}
                    currCard={currCard}
                    setCurrentCard={currCard}/>
                  )
                })
              }
          </div>
      </div>
   )
}

export default ExploreMore;