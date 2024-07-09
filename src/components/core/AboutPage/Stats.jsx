import React from "react";

const Stats = [
   {count:"5K",label:"Active Students"},
   {count:"10+",label:"Mentors"},
   {count:"200+",label:"Courses"},
   {count:"50+",label:"Awards"},

];

const StateComponent = () =>{
     return (
        <section className="w-screen">
             <div className="bg-richblack-700 h-[100px] p-2 mt-10 flex flex-row justify-between items-center max-h-max">
                 <div className="flex flex-row justify-evenly w-full">
                    {
                      Stats.map((data,index)=>{
                         return (
                            <div key={index}>
                                <h1 className=" text-white font-extralight text-3xl text-center">{data.count}</h1>
                                <h2 className="text-lg text-richblack-500">{data.label}</h2>
                            </div>
                         )
                      })
                    }
                 </div>
             </div>
        </section>
     )
}

export default StateComponent;  