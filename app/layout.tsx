import type { Metadata } from "next";
import "./globals.css";
// Import Footer and Navbar components from the components folder
import { Footer, Navbar } from "@/components";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Car Hub", // Title of the webpage
  description: "Discover the best cars in the world.", // Description of the webpage
};

// Define the RootLayout functional component
export default function RootLayout({
  children, // Children components to be rendered within the layout
}: Readonly<{
  children: React.ReactNode; // Type definition for children components
}>) {
  return (
    // HTML document structure with React components
    <html lang='en'>
      <body className='relative'>
        {" "}
        {/* Apply relative positioning */}
        <Navbar /> {/* Render the Navbar component */}
        {children} {/* Render children components */}
        <Footer /> {/* Render the Footer component */}
      </body>
    </html>
  );
}
