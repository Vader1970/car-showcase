// Import necessary dependencies and components

// Importing Hero component from the components folder
import { Hero } from "@/components";
// Importing Image component from Next.js
import Image from "next/image";

// Define the Home functional component
export default function Home() {
  return (
    // Main container for the page
    <main className='overflow-hidden'>
      <Hero /> {/* Render the Hero component */}
    </main>
  );
}
