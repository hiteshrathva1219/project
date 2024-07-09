import React from "react";
import HighlightText from "../Homepage/HighlightText";
import CTAButton from "../Homepage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = ()=>{
     return (
        <div className="grid mx-auto grid-col-1 lg:grid-cols-4 mb-10 p-5 text-richblack-5 w-11/12 mt-10">
        {
            LearningGridArray.map((card,index)=>{
                return (
                    <div key={index}
                      className={`${index===0 && " bg-transparent lg:col-span-2 lg:h-[300px] p-5"}
                      ${
                         card.order%2===1 ? "bg-richblack-700 lg:h-[300px] p-5":"bg-richblack-800 lg:h-[300px] p-5"
                       }
                       ${card.order===3 && "lg:col-start-2"}  
                       flex flex-col`}>
                        
                       {
                         card.order<0 ? (
                             <div className="lg:w-[80%] flex flex-col pb-5 p-3 justify-between items-start gap-4">
                               <div className="text-4xl font-bold">
                                   {card.heading}
                                   <HighlightText text={card.highlightText}/>
                               </div>
                               <p className="text-richblack-400">{card.description}</p>
                           <div className="text-xl transition-all duration-200 hover:scale-95">
                                  <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                  </CTAButton>
                               </div>
                             </div>   
                         ):(<div className="flex flex-col gap-4 mx-auto">
                             <h1 className="text-2xl w-fit">{card.heading}</h1>
                             <p className="text-richblack-300">{card.description}</p>
                         </div>)
                       } 

                    </div>
                )
            })
        }
        </div>
     )
}

export default LearningGrid;