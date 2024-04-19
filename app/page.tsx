// Import necessary dependencies and components

// Importing Hero CustomFilter and SearchBar components from the components folder
import { CustomFilter, Hero, SearchBar } from "@/components";
// Importing Image component from Next.js
import Image from "next/image";

// Define the Home functional component
export default function Home() {
  return (
    // Main container for the page
    <main className='overflow-hidden'>
      <Hero /> {/* Render the Hero component */}
      {/* Section for Car Catalogue */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar /> {/* Render the SearchBar component */}
          <div className='home__filter-container'>
            {/* Render the Fuel CustomFilter component */}
            <CustomFilter title='fuel' />
            {/* Render the Fuel CustomFilter component */}
            <CustomFilter title='year' />
          </div>
        </div>
      </div>
    </main>
  );
}
