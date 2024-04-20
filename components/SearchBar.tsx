// Browser Event
"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

// Define a button component for search
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain' />
  </button>
);

// Define the SearchBar component
const SearchBar = () => {
  // State for the manufacturer and model inputs
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Handle search functionality
  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      {/* Search input for manufacturer */}
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        {/* Button for mobile view */}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      {/* Search input for model */}
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        {/* Button for mobile view */}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      {/* Button for non-mobile view */}
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
