import { Link } from "react-router";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className="w-full fixed top-0 left-0 z-40 px-4 py-2 lg:px-12 lg:py-4 
    backdrop-blur-lg bg-primary-50"
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center space-x-3 sm:space-x-5">
          <div className="text-2xl">+</div>
          <div>
            <h3 className="text-normal sm:text-2xl font-mono font-extrabold">
              Medi
              <span className="text-primary-500">Care</span>
            </h3>
            <p className="text-[10px] tracking-tight">HOSPITAL MANAGEMENT</p>
          </div>
        </div>

        <div className="hidden lg:inline space-x-5 font-semibold">
          <Link to="/features">Features</Link>
          <Link to="/services">Services</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hidden lg:flex items-center justify-center space-x-5">
          <Link to="/login">
            <button className=" border-2 border-border rounded-lg  font-semibold px-4 py-2">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-primary-500 text-white rounded-lg font-semibold px-4 py-2">
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
