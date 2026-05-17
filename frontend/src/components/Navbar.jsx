import { Link } from "react-router";
import { Menu } from "lucide-react";

//local imports
import Logo from "./Logo.jsx";

const Navbar = () => {
  return (
    <div
      className="w-full fixed top-0 left-0 z-40 px-4 py-2 lg:px-12 lg:py-4 
    backdrop-blur-lg bg-primary-50"
    >
      <div className="flex justify-between items-center">
        <Logo />

        <div className="hidden lg:inline space-x-5 font-semibold">
          <Link
            className='hover:text-primary-600 hover:cursor-pointer relative after:content-[""]
             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
             after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
            to="/features"
          >
            Features
          </Link>
          <Link
            className='hover:text-primary-600 hover:cursor-pointer relative after:content-[""]
             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
             after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
            to="/services"
          >
            Services
          </Link>
          <Link
            className='hover:text-primary-600 hover:cursor-pointer relative after:content-[""]
             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
             after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
            to="/Pricing"
          >
            Pricing
          </Link>
          <Link
            className='hover:text-primary-600 hover:cursor-pointer relative after:content-[""]
             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
             after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
            to="/about"
          >
            About Us
          </Link>
          <Link
            className='hover:text-primary-600 hover:cursor-pointer relative after:content-[""]
             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
             after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full'
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center space-x-5">
          <Link to="/login">
            <button
              className="border border-primary-300 rounded-lg  font-semibold px-4 py-2
            hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] transition-all duration-300 
            hover:cursor-pointer"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="bg-primary-500 text-white rounded-lg font-semibold px-4 py-2
            hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] hover:bg-primary-600 transition-all
            duration-300 hover:cursor-pointer"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
