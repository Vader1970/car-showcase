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
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

// Define the interface for the props of the SearchManufacturer component
export interface SearchManufacturerProps {
  manufacturer: string; // Currently selected manufacturer
  setManufacturer: (manufacturer: string) => void; // Function to set the selected manufacturer
}

// Define the interface for the props of a car component
export interface CarProps {
  city_mpg: number; // City miles per gallon
  class: string; // Car class
  combination_mpg: number; // Combined miles per gallon
  cylinders: number; // Number of cylinders
  displacement: number; // Engine displacement
  drive: string; // Drive type (e.g., FWD, RWD)
  fuel_type: string; // Fuel type (e.g., gasoline, diesel)
  highway_mpg: number; // Highway miles per gallon
  make: string; // Car make (manufacturer)
  model: string; // Car model
  transmission: string; // Transmission type (e.g., automatic, manual)
  year: number; // Year of manufacture
}
