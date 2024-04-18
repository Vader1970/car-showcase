"use client";

// Import necessary dependencies and types
import Image from "next/image";

// Importing CustomButtonProps type from types folder
import { CustomButtonProps } from "@/types";

// Define the CustomButton functional component
const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    // Button element with dynamic title, styles, and click handler
    <button disabled={false} type={"button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
