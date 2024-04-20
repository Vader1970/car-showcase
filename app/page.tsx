// Import necessary dependencies and components

// Importing Hero CustomFilter and SearchBar components from the components folder
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchhCars } from "@/utils";
// Importing Image component from Next.js
import Image from "next/image";

// Define the Home functional component
export default async function Home() {
  const allCars = await fetchhCars();

  // Check if allCars is not an array, or if it has a length less than 1, or if it is falsy
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // console.log(allCars);

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

        {/* Render the CarCard components */}
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          // Render error message if data is empty
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Opps, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
