import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = ()=>{
   const {total,totalItems}=useSelector((state)=>state.cart);

   return (
     <div className="flex flex-col justify-between gap-10">
        <h1 className="text-richblack-5 ml-20 text-2xl">Your Cart</h1>
        <p className="text-richblack-300 text-xl p-2 border-b-2 ml-20 w-full">{totalItems} Courses in Cart</p>

        {
            total>0 ?(<div className="flex flex-row justify-between gap-5 ml-20">
                <RenderCartCourses/>
                <RenderTotalAmount/>
            </div>):(<p className="text-richblack-5 text-center text-xl">Your Cart is Empty</p>)
        }
     </div>
   )

}

export default Cart;