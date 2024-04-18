"use client";

// Import necessary dependencies and components

// Importing Image component from Next.js
import Image from "next/image";
// Importing CustomButton component from the same folder
import CustomButton from "./CustomButton";

// Define the Hero functional component
const Hero = () => {
  // Define scroll handler function
  const handleScroll = () => {};

  return (
    // Main container for the hero section
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        {/* Hero title */}
        <h1 className='hero__title'>Find, book, or rent a car — quickly and easily!</h1>

        {/* Hero subtitle */}
        <p className='hero__subtitle'>Streamline your car rental experiance with our effortless booking process.</p>

        {/* CustomButton component with title, styles, and click handler */}
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>

      {/* Container for the hero image */}
      <div className='hero__image-container'>
        <div className='hero__image'>
          {/* Display the hero image */}
          <Image src='/hero.png' alt='hero' fill className='object-contain' />

          {/* Overlay for the hero image */}
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
