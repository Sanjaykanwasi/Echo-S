import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div>
      <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
          What people{" "}
          <span className="bg-gradient-to-r from-purple-300 to-purple-950 text-transparent bg-clip-text">
            are saying
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div className="w-full  sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
              <div className="bg-neutral rounded-md text-md border border-neutral-700 font-thin p-6">
                <p className="">{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-800 bg-cover"
                    src={testimonial.image}
                    alt="Img"
                  />
                  <div>
                    <h6 className="text-purple-300 text-lg tracking-wide font-normal">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm font-normal italic text-neutral-500">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
