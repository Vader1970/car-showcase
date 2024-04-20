//This code defines the CarDetails component, which displays detailed information about a car within a modal dialog. The component takes three props: isOpen (indicating whether the dialog is open), closeModal (function to close the dialog), and car (details of the car to display).

"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { CarProps } from "@/types";

// Define the interface for the props of the CarDetails component
interface CarDetailsProps {
  isOpen: boolean; // Indicates whether the car details dialog is open
  closeModal: () => void; // Function to close the car details dialog
  car: CarProps; // Details of the car to display
}

// Define the CarDetails functional component
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      {/* Transition component for the dialog appearance */}
      <Transition appear show={isOpen} as={Fragment}>
        {/* Dialog container */}
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          {/* Transition for the backdrop */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            {/* Backdrop */}
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          {/* Dialog content container */}
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              {/* Transition for the dialog panel */}
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-0'
              >
                {/* Dialog panel */}
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                  {/* Close button */}
                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeModal}
                  >
                    <Image src='/close.svg' alt='close' width={20} height={20} className='object-contain' />
                  </button>
                  {/* Car images */}
                  <div className='flex-1 flex flex-col gap-3'>
                    {/* Main car image */}
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
                    </div>
                    {/* Additional car images */}
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
                      </div>
                    </div>
                  </div>

                  {/* Car details */}
                  <div className='flex-1 flex flex-col gap-2'>
                    {/* Car title */}
                    <h2 className='semi-bold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>
                    {/* Car attribute details */}
                    <div className='mt-3 flex flex-wrap gap-3'>
                      {Object.entries(car).map(([key, value]) => (
                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                          <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                          {/* Attribute value */}
                          <p className='text-balck-100 font-semibold'>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
