"use client";

// Import necessary dependencies and types

// Import Image component from Next.js for optimized image loading
import Image from "next/image";

// Importing CustomButtonProps type from types folder
import { CustomButtonProps } from "@/types";

// Define the CustomButton functional component
const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    // Button element with dynamic title, styles, and click handler
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
