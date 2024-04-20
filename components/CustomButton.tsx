"use client";

// Import necessary dependencies and types

// Import Image component from Next.js for optimized image loading
import Image from "next/image";

// Importing CustomButtonProps type from types folder
import { CustomButtonProps } from "@/types";

// Define the CustomButton functional component
const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    // Button element with dynamic title, styles, and click handler
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {/* Button title */}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {/* Render the right icon if provided */}
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt='right icon' fill className='object-contain' />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
