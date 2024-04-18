// Import Link component from Next.js for client-side navigation
import Link from "next/link";
// Import Image component from Next.js for optimized image loading
import Image from "next/image";

// Import CustomButton component from the same folder
import CustomButton from "./CustomButton";

// Define the Navbar functional component
const Navbar = () => {
  return (
    // Header section containing the navigation bar
    <header className='w-full absolute z-10'>
      {/* Navigation bar */}
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        {/* Logo with link to home page */}
        <Link href='/' className='flex justify-center items-center'>
          <Image src='/logo.svg' alt='Car Hub Logo' width={118} height={18} className='object-contain' />
        </Link>

        {/* Sign In button */}
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
