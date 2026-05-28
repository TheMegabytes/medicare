import { Check, Rocket, ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router";

import { features } from "../../constants/features.jsx";

const Features = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-4 
    md:p-6 gap-6"
    >
      <div className="max-w-200 mb-2.5 text-center mt-20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-heading">
          Features
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-500">
          Powerful Modules for Every Department
        </h3>
        <p className="text-lg">
          From patient registration to revenue reports - Medicare simplifies
          every workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {features.map((card, index) => {
          return (
            <div
              key={index}
              className="max-w-95 p-3 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.4)]"
            >
              <div className="w-full">
                <h4
                  className="flex items-center gap-2 sm:gap-3 text-text-heading 
                  font-semibold md:text-2xl"
                >
                  {
                    <card.icon
                      size={30}
                      className={`${card.iconStyles} p-1 rounded`}
                    />
                  }
                  {card.title}
                </h4>
              </div>

              <p className="my-3">{card.desc}</p>

              <ul className="mt-1 ml-2">
                {card.features.map((feature, index) => {
                  return (
                    <li key={index} className="flex items-center gap-1 italic">
                      <Check className="text-success-700 font-bold" size={16} />{" "}
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center mt-5 min-w-full">
        <div
          className="hidden w-25 h-25 rounded-full bg-primary-500 md:flex justify-center 
        items-center text-white"
        >
          <Rocket size={50} />
        </div>

        <div className="max-w-100 space-y-2">
          <h3 className="text-text-heading font-semibold">
            Ready To Transform Your Hospital?
          </h3>
          <p>
            Join thousands of healthcare prroviders using Medicare to deliver
            better care and grow their business.
          </p>
        </div>

        <div className="flex justify-between items-center max-w-80 space-x-4 mt-5 sm:mt-0">
          <Link
            className="flex justify-center items-center px-4 py-2 bg-primary-500
            text-white  hover:bg-primary-600 overflow-hidden
            hover:shadow-primary-600 border border-primary-300 rounded-lg  
            font-semibold hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] transition-all 
            duration-300 hover:cursor-pointer"
            to="/signup"
          >
            Get Started <ArrowRight className="ml-2" size={18} />
          </Link>

          <Link
            className="flex justify-center items-center rounded-lg px-4 py-2 border 
            border-primary-300 font-semibold hover:shadow-[0_0_10px_rgba(0,0,200,0.6)] 
            transition-all duration-300 hover:cursor-pointer"
            to="/demo"
          >
            <PlayCircle className="mr-2" size={18} />
            Book Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
