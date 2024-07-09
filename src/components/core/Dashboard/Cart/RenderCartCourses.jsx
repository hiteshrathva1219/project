import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa"
import { removeFromCart } from "../../../../slices/cartSlice"


const RenderCartCourses = ()=>{
    
    const {cart} = useSelector((state)=>state.cart);
    // console.log(cart);
    return (
        <div className="flex flex-col justify-between w-full gap-2 p-5">
            {
                cart.map((course,index)=>(
                    <div className="flex flex-row justify-between gap-x-2 w-full">
                       <div className="flex flex-row justify-between gap-3">
                         <img src={course?.thumbnail} className="h-[150px] w-[200px] rounded-md"/>
                         <div className=" flex flex-col text-richblack-5 text-xl gap-2">
                            <p>{course?.courseName}</p> 
                            <p>{course?.category?.name}</p>
                         <div className="flex flex-row justify-between gap-1">
                            <span>4.8</span>
                            <ReactStars
                             count={5}
                             size={20}
                             edit={false}
                             activeColor="#ffs700"
                             emptyIcon={<FaStar/>}
                             fullIcon={<FaStar/>}
                             />

                             <span>{course?.ratingAndReviews.length} Ratings</span>
                         </div>
                         </div>
                       </div>
                     <div>
                         <button onClick={()=>dispatchEvent(removeFromCart(course._id))}>
                           <RiDeleteBin6Line/>
                           <span className="text-richblack-5">Remove</span> 
                         </button>
                         <p className="mb-6 text-3xl font-medium text-yellow-100">Rs {course?.price}</p>
                     </div>  
                    </div>    
                ))
            }
        </div>
    )


}

export default RenderCartCourses;