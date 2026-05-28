import {
  LockIcon,
  Coins,
  Stars,
  X,
  Check,
  ArrowRight,
  Star,
} from "lucide-react";
import { Link } from "react-router";

import prices from "../../constants/prices.js"; // Constants

const Pricing = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6
    md:p-8"
    >
      <div
        className="flex justify-between items-center gap-2 absolute top-20.5  
      left-5 bg-primary-500/10 px-2 py-1 rounded-full text-primary-600
      text-xs"
      >
        <Stars className="size-4" /> Simple pricing. Powerful platform.
      </div>

      <div className="max-w-200 space-y-5 text-center mt-25">
        <h2 className="font-bold text-xl sm:text-2xl md:text-4xl text-text-heading">
          Plans built for Hospitals of Every Size
        </h2>

        <p className="text-primary-500 sm:text-lg max-w-150 mx-auto font-semibold">
          Choose the perfect plan for your hospital size. Upgrade, downgrade or
          cancel anytime.
        </p>

        <div
          className="flex flex-col md:flex-row justify-between items-center 
        space-y-3 font-semibold"
        >
          <div
            className="flex text-sm gap-2 text-primary-500 p-1.5
          shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-full"
          >
            <Coins /> No hidden fees
          </div>
          <div
            className="flex text-sm gap-2 text-danger-400 p-1.5
          shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-full"
          >
            <X className="size-5" /> Cancel anytime
          </div>
          <div
            className="flex text-sm gap-2 text-success-600 p-1.5
          shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-full"
          >
            <LockIcon className="size-5" /> Secure & Compliant
          </div>
        </div>

        <div
          className="flex justify-around items-center max-w-[80%] p-2 mb-3 
        mt-12 mx-auto"
        >
          <span className="text-sm font-semibold">Monthly</span>
          <div>Switch here</div>
          <span className="text-sm font-semibold">Yearly</span>
          <span
            className="px-2 py-1 rounded-full text-success-500/80 
          bg-success-500/10 text-sm"
          >
            Save 20%
          </span>
        </div>
      </div>

      <div
        className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
        max-w-full"
      >
        {prices.map((price, index) => (
          <div
            key={index}
            className={`w-80 h-110 rounded-xl p-2 relative ${
              price.title === "Professional"
                ? "shadow-[0_0_5px_#3b82f6] border border-primary-600"
                : "shadow-[0_0_5px_rgba(0,0,0,0.4)]"
            }`}
          >
            <div className={`px-2 py-1 bg-primary-600 absolute -top-3 left-25 items-center gap-2 text-xs 
              text-white ${price.title === 'Professional'  ? 'flex' : 'hidden'} rounded`}>
              <Star className="size-4" /> Most popular
            </div>
            <div className="flex justify-start items-center gap-5 mt-3 sm:text-lg">
              <div
                className={`w-13.5 h-13.5 flex justify-center items-center rounded-full ${price.colors.text}
                ${price.colors.bg}/20`}
              >
                <price.icon className="size-10 flex justify-center items-center" />
              </div>

              <div>
                <h3 className="font-semibold text-text-heading text-lg">
                  {price.title}
                </h3>
                <p className="text-xs">{price.desc}</p>
              </div>
            </div>

            <h4 className="text-center font-mono font-semibold my-5">
              <span
                className={`${price.title !== "Enterprise" ? "inline m-1" : "hidden"} `}
              >
                Ksh.
              </span>
              {price.cost}
              <span
                className={`${price.title !== "Enterprise" ? "inline ml-1" : "hidden"} `}
              >
                / Month
              </span>
            </h4>

            <hr className="text-gray-300 my-5" />

            <div>
              {price.features.map((feature, index) => (
                <div className="flex items-center gap-0.5">
                  <Check size={18} className={price.colors.text} />
                  <p key={index}>{feature}</p>
                </div>
              ))}
            </div>

            <Link
              className={`flex justify-center items-center px-4 py-2 ${price.colors.bg}
            text-white overflow-hidden rounded-lg font-semibold transition-all duration-300 
            hover:cursor-pointer absolute bottom-5 left-20`}
              to="/signup"
            >
              {price.title === 'Enterprise' ? 'Talk To Sales' : 'Get Started'} <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full sm:w-200 md:w-255 p-2 rounded shadow-[0_0_5px_rgba(0,0,0,0.4)]">
        <div className='grid'>
          <div>
            <h3>All plans include</h3>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
