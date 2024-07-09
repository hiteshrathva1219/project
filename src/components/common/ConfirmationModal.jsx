import React from "react";
import IconBtn from "../common/IconBtn"

const ConfirmationModal = ({modalData})=>{
    return (
        <div className="w-[300px] absolute translate-x-[200%] translate-y-[-90%] flex flex-col gap-2 h-fit p-3 rounded-xl items-center mx-auto  bg-richblue-900 justify-between">
            <div className="flex flex-col justify-between gap-2">
                <p className="text-lg text-center text-richblack-5">
                    {modalData.text1}
                </p>
                <p className="text-md text-richblack-5">
                    {modalData.text2}
                </p>
                <div className="flex flex-row gap-2 justify-evenly">
                    <IconBtn onclick={modalData?.btn1Handler}
                    text={modalData?.btn1Text}/>
                    <IconBtn onclick={modalData?.btn2Handler} text={modalData?.btn2Text}/>
                </div>
            </div>
        </div>
    )

}
export default ConfirmationModal;