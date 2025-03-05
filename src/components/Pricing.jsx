import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div>
      <div className="mt-20 ">
        <h2 className="text-3xl sm:text-3xl lg:text-6xl text-center my-8 tracking-wide">
          Pric
          <span className="bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text">
            ing
          </span>
        </h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
              <div className="p-10 border border-neutral-600 rounded-xl  ">
                <p className="text-4xl mb-8">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-purple-100 to-purple-700 text-transparent bg-clip-text text-xl mb-4 ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-8 ">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">
                    /Month
                  </span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li
                      className="mt-8 text-purple-300 flex items-center"
                      key={index}
                    >
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="inline-flex justify-center items-center  text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-600 border border-purple-900 rounded-lg transition duration-200"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
