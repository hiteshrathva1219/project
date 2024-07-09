import React from "react";
import {FaArrowRight} from "react-icons/fa";
import { Link} from "react-router-dom";
import HighlightText from "../components/core/Homepage/HighlightText";
import CTAButton from "../components/core/Homepage/Button";
import Banner from "../assest/images/banner.mp4";
import CodeBlocks  from "../components/core/Homepage/CodeBlocks";
import TimelineSection from "../components/core/Homepage/TimelineSections";
import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
import InstructorSection from "../components/core/Homepage/InstructorSections";
import ExploreMore from "../components/core/Homepage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
const Home = ()=>{

  return (
        <div>
            {/*section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-mxContent">
                   <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                <Link to={"/signup"}>
                     <div className="flex flex-row items-center gap-2 rounded-full px-7 py-3 group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                     </div>
                </Link>
                   </div>
                <div className="mt-7 text-center text-4xl font-semibold">
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"}/>
                </div>

                <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, maxime. Lorem sicing elit. Sunt, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quia.
                </div>

                <div className="flex flex-row gap-7 mt-8">
                   <CTAButton active={true} linkto={"/signup"}>
                      Learn More
                   </CTAButton>
                   <CTAButton active={false} linkto={"/login"}>
                      Book a Demo
                   </CTAButton>
                </div>
                
                <div className="shadow-blue-200 mx-7 my-12">
                    <video
                     muted
                     loop
                     autoPlay
                    >
                     <source  src={Banner} type="video/mp4"/>
                    </video>
                </div>
                 
                <div>
                 {/*Code Section 1*/}
                 <div>
                    <CodeBlocks
                      position={"lg:flex-row"} 
                      heading={
                           <div className="text-4xl font-semibold">
                               Unlock Your
                               <HighlightText text={"Coding Potential "}/>
                               with our online courses
                           </div>
                      }
                      subheading={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, rerum."} 
                      ctabatn1={
                        {
                            btntext:"Try it yourself",
                            linkto:"/signup",   
                            active:true,
                        }
                      }
                      ctabatn2={
                        {
                            btntext:"Learn More",
                            linkto:"/login",   
                            active:false,
                        }
                      }
                      codeblock={`<!DOCTYPE html>\n
                        <html lang="en">\n
                        <head><meta charset="UTF-8">\n
                        <title>Document</title></head>\n
                        <body>Hello World</body></html>`} 
                        codeColor={"text-richblue-100"}
                    >
                    </CodeBlocks>
                 </div>

                 <div>
                    <CodeBlocks
                      position={"lg:flex-row-reverse"} 
                      heading={
                           <div className="text-4xl font-semibold">
                               Unlock Your
                               <HighlightText text={"Coding Potential "}/>
                               with our online courses
                           </div>
                      }
                      subheading={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, rerum."} 
                      ctabatn1={
                        {
                            btntext:"Try it yourself",
                            linkto:"/signup",   
                            active:true,
                        }
                      }
                      ctabatn2={
                        {
                            btntext:"Learn More",
                            linkto:"/login",   
                            active:false,
                        }
                      }
                      codeblock={`<!DOCTYPE html>\n
                                  <html lang="en">\n
                                  <head><meta charset="UTF-8">\n
                                  <title>Document</title></head>\n
                                  <body>Hello World</body></html>`} 
                      codeColor={"text-richblue-100"}
                    >
                    </CodeBlocks>
                 </div>     
                </div>
                 
                <ExploreMore/> 
            </div>

            {/*Section 2*/}
            <div className="bg-pure-greys-5 text-richblack-700">
              <div className="homepage_bg h-[325px]">
                 
                 <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                     <div className="h-[150px]"></div>
                     <div className="flex flex-row gap-7">
                       <CTAButton active={true} linkto={"/signup"}> 
                          <div className="flex flex-row gap-3">
                            Explore Full Catalog 
                            <FaArrowRight/> 
                          </div> 
                       </CTAButton>

                       <CTAButton active={false} linkto={"/login"}> 
                          <div className="text-white">
                             Learn more 
                          </div> 
                       </CTAButton>
                     </div>
                 </div>

              </div>

                <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                    
                    <div className="flex flex-row mb-10 mt-[125px] justify-center gap-5">
                        <div className="text-4xl font-semibold w-[45%] text-black">
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in demand"}/>
                        </div>

                        <div className="flex flex-col gap-10 w-[40%] items-start">
                          <div className="text-[16px]">
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid numquam officiis ratione molestiae quibusdam officia?
                          </div>
                          <CTAButton active={true} linkto={"signup"}>
                             <div>
                                Learn more
                             </div>
                          </CTAButton>
                        </div>
                    </div>

              <TimelineSection/>
              <LearningLanguageSection/> 
            </div>
          </div>
          
           {/*Section 3*/} 
          <div className="w-11/12 mt-[100px] mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                 <InstructorSection/>
                 <h2 className="text-center text-4xl font-semibold mt-10">review from other Learners</h2>
                 <ReviewSlider/>
          </div>
  
        </div>
    )
}

export default Home;