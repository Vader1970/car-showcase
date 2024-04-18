import { MouseEventHandler } from "react";

// Define the interface for the props of the CustomButton component
export interface CustomButtonProps {
  title: string; // Title of the button (required)
  // Additional styles for the button container (optional)
  containerStyles?: string;
  // Click handler for the button (optional)
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
