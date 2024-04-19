import { MouseEventHandler } from "react";

// Define the interface for the props of the CustomButton component
export interface CustomButtonProps {
  title: string; // Title of the button (required)
  // Additional styles for the button container (optional)
  containerStyles?: string;
  // Click handler for the button (optional)
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  // Type of the button: "button" for regular buttons, "submit" for submit buttons (optional)
  btnType?: "button" | "submit";
}

// Define the interface for the props of the SearchManufacturer component
export interface SearchManufacturerProps {
  manufacturer: string; // Currently selected manufacturer
  setManufacturer: (manufacturer: string) => void; // Function to set the selected manufacturer
}
