// Import necessary dependencies and components
import Image from "next/image";
import Link from "next/link";

// Import footerLinks constant from the constants file
import { footerLinks } from "@/constants";

// Define the Footer functional component
const Footer = () => {
  return (
    // Footer section with flex layout and border
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      {/* Main content container */}
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        {/* Logo and copyright section */}
        <div className='flex flex-col justify-start items-start gap-6'>
          {/* Render logo */}
          <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          {/* Copyright text */}
          <p className='text-base text-gray-700'>
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        {/* Footer links section */}
        <div className='footer__links'>
          {/* Map through footerLinks constant to render links */}
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              {/* Render link category title */}
              <h3 className='font-bold'>{link.title}</h3>
              {/* Map through individual links within each category */}
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with copyright text and additional links */}
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2024 CarHub. All Rights Reserved</p>
        {/* Additional links */}
        <div className='footer__copyrights-link'>
          {/* Privacy Policy link */}
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          {/* Terms of Use link */}
          <Link href='/' className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component
export default Footer;
