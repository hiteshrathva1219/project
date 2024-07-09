 import React from "react";
 import HighlightText from  "../components/core/Homepage/HighlightText";
 import BannerImage1 from "../assest/images/aboutus1.webp"
 import BannerImage2 from "../assest/images/aboutus2.webp"
 import BannerImage3 from "../assest/images/aboutus3.webp"
 import FoundingStory from "../assest/images/FoundingStory.png"
 import StateComponent from "../components/core/AboutPage/Stats"
 import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
 import LearningGrid from "../components/core/AboutPage/LearningGrid";
 import Stats from "../components/core/AboutPage/Stats";
import ReviewSlider from "../components/common/ReviewSlider";
const About = ()=>{
    return(
       <div className="flex flex-col w-screen items-center justify-between">
           {/*Section 1*/}
           <section className="h-[500px] bg-richblack-700 flex flex-col items-center justify-between text-richblack-5 mx-auto relative">
               <div className="flex flex-col gap-10 mt-20">
                   <header className="flex flex-col justify-center gap-y-2 mx-auto items-center w-[50%] text-4xl">
                      Driving Innovation in Online Education for a
                      {/* <HighlightText text={"Brighter Future"}/> */}
                      <h1 className="font-bold text-richblue-300 text-opacity-100 ">Brighter Future</h1>
                      <p className="text-lg text-richblack-300 text-center">Studynotion is at the Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, sapiente?
                         Lorem ipsum sit amet consectetur adipisicing elit. Molestias, exercitationem. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit.
                      </p>
                   </header>
                   <div className="flex gap-x-5 mx-auto flex-row translate-y-[70%] translate-x-[15%] absolute">
                         <img src={BannerImage1} alt="" />
                         <img src={BannerImage2} alt="" />
                         <img src={BannerImage3} alt="" />
                   </div>
               </div>
           </section>
           {/* section 2 */}
           <section className="flex flex-col w-11/12 text-richblack-5 justify-center mx-auto items-center top-28  my-36  ">
                <div className="text-3xl mx-auto w-[80%] text-center">
                    We are passionate about revolutionizing the way we learn,Our innovative platform
                    <HighlightText text={"combines technology,"}/>
                    <span className=" text-brown-100">{" "} expertise</span>
                    ,and community to create an
                    <span className=" text-brown-100">{" "} unparalleled educational experience.</span>
                </div>
           </section>
           {/* section 3 */}
           <section className="flex flex-col text-richblack-5 mt-20">
              <div className="flex flex-col justify-between items-center gap-10">
                 <div className="flex flex-row justify-between gap-x-20 w-[75%] item-center mx-auto">
                    <div className="flex flex-col lg:w-[100%] gap-y-6">
                        <h1 className="text-3xl text-pink-300 font-bold "> Our Founding Story</h1>

                        <p className="text-richblack-300 text-justify">Our e-learning platform was born out of a shared vision and passion for transforming education. 
                           It all began with a group of educators, technologists, and lifelong learners who recognized the need 
                           for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world. </p>
                        
                        <p className="text-richblack-300 text-justify">As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. 
                           We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. 
                           We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full 
                           potential.</p>
                    </div>
                    <div className="h-[80%] w-[80%]">
                        <img src={FoundingStory} alt="" />
                    </div>
                 </div>

                 <div className="flex flex-row w-[75%]  items-center justify-between mt-20 mx-auto">
                    <div className="flex flex-col gap-5 w-[40%]">
                       <h1 className="text-4xl font-semibold text-brown-500">Our Vision</h1>
                       <p className="text-richblack-300 text-justify">With this vision in mind, we set out on a journey to create an e-lear
                          ning platform that would revolutionize the way people learn. Our team of d
                          edicated experts worked tirelessly to develop a robust and intuitive platform 
                          that combines cutting-edge technology with engaging content, fostering a dynamic 
                          and interactive learning experience.</p>
                    </div> 
                    <div className="flex flex-col  gap-y-5 w-[40%]">
                       <h1 className="text-4xl font-semibold text-richblue-300">Our Mission</h1>
                       <p className="text-richblack-300 text-justify">Our mission goes beyond just delivering courses online. 
                          We wanted to create a vibrant community of learners, where individuals can connect, collaborate, 
                          and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, 
                          and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                    </div> 
                 </div>
              </div>
           </section>
             
          <StateComponent/>
          <section className="flex flex-col w-11/12">
          <LearningGrid/>
          <ContactFormSection/>
          <ReviewSlider/>
          </section> 
       </div>
    )
}
export default About;