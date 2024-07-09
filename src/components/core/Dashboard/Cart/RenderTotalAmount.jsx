import React, { useState } from "react";
import IconBtn from "../../../common/IconBtn";
import { useSelector } from "react-redux";
const RenderTotalAmount = ()=>{

    const {cart,total}=useSelector((state)=>state.cart);

    const handleBuyCourse = ()=>{

       const courses=cart.map((course)=>course._id);
       console.log("Bought these courses:",courses);
    }
   return (
     <div className="bg-richblack-700 w-[250px] h-fit rounded-md p-2 flex flex-col justify-between gap-2">
         
        <p className="text-richblack-5">Totals</p>
        <p className="text-xl mb-3 text-yellow-25">Rs {total}</p>

        <button onclick="handleBuyCourse" className="bg-yellow-100 rounded-md h-[30px]">Buy Now</button>

     </div>
   ) 

}

export default RenderTotalAmount;