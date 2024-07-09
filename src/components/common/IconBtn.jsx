import { spread } from "axios";
import React from "react";

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
})=>{
   
  return <button disabled={disabled} onClick={onclick} type={type} className={`bg-yellow-50 transition-all duration-200 hover:scale-90 w-fit p-2 h-fit rounded-md text-richblack-700 ${customClasses}`}>
     {
        children ? (
            <>
            <span>
                {text}
            </span>
            {children}
            </>
        ):(
        <span>{text}</span>)
    }
    </button>
}

export default IconBtn;