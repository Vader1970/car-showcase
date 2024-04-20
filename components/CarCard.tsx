"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

// Define the props interface for the CarCard component
interface CarCardProps {
  // Car object containing car details
  car: CarProps;
}

// Define the CarCard functional component
const CarCard = ({ car }: CarCardProps) => {
  // Destructure car object to extract required properties
  const { city_mpg, year, make, model, transmission, drive } = car;

  // State for controlling modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Calculate car rent based on city miles per gallon and year
  const CarRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
      {/* Car title */}
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      {/* Car rent price */}
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {CarRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>

      {/* Car image */}
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
      </div>

      {/* Car details */}
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          {/* Transmission type */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14]'>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          {/* Drive type */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='tire' />
            <p className='text-[14]'>{drive.toUpperCase()}</p>
          </div>
          {/* City miles per gallon */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='gas' />
            <p className='text-[14]'>{city_mpg} MPG</p>
          </div>
        </div>

        {/* View More button */}
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px]
            rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Modal for displaying car details */}
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
