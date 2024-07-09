import React from "react";
import { Link } from "react-router-dom";

const Button = ({children,active,linkto}) =>{
    return (
        <Link to={linkto} className="transition-all duration-300 hover:scale-90">
            <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${active?"bg-yellow-50 text-black transition-all duration-200 hover:bg-yellow-50":"bg-richblack-800"}`}>
                {children}
            </div>
        </Link> 
    )
}

export default Button;