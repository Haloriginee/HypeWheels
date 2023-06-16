"use client"; // need to use this to make a component go to client side.

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src="/right-arrow.png"
            alt="right-arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
