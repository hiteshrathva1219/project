import React from "react";

const CourseCard = ({key,cardData,currCard,setCurrCard})=>{
    return (
        <div className={`${cardData.heading===currCard?"bg-white text-black shadow-yellow-50 shadow-md":"bg-richblack-800"} flex flex-col justify-between h-[330px] w-fit border-richblack-200 rounded-md translate-y-[20%]`}>
           <div className="flex flex-col justify-between gap-4 mt-10 mx-5">
             <div className="text-3xl font-bold">
              {cardData.heading}
             </div>
             <div className=" text-richblack-300">
              {cardData.description}
             </div>
          </div> 
          <div className="flex flex-row justify-between">
              <div className={`flex flex-row ${cardData.heading===currCard?"text-richblue-500":"text-richblack-300"} gap-2 px-1  py-1 text-xl`}>
                 <img src="" alt="" />
                 {cardData.level}
              </div>
              <div className={`flex flex-row ${cardData.heading===currCard?"text-richblue-500":"text-richblack-300"} gap-2 px-1 py-1 text-xl`}>
                 <img src="" alt="" />
                 {cardData.lessionNumber}
                 <p>Lessions</p>
              </div>
          </div>
       </div>
    )
}

export default CourseCard;