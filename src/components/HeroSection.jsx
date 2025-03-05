import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20 ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
          Echo R builds tools{" "}
          <span className="bg-gradient-to-r from-purple-300 to-purple-950 bg-clip-text text-transparent">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center max-w-4xl text-gray-400">
          Echo S – Empowering developers with smart, AI-driven tools for
          seamless coding, automation, and innovation. 🚀
        </p>
        <div className="flex justify-center my-10">
          <a
            className="bg-gradient-to-r from-purple-300 to-purple-950 py-3 px-4  mx-3 rounded-md "
            href="#"
          >
            Start for Free
          </a>
          <a href="#" className="py-3 px-4 rounded-md mx-3 border border-white">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            className="rounded-lg w-1/2 border border-purple-800 shadow-purple-300 mx-2 my-4"
            autoPlay
            loop
            muted
            src={video1}
          ></video>
          <video
            className="rounded-lg w-1/2 border border-purple-800 shadow-purple-300 mx-2 my-4"
            autoPlay
            loop
            muted
            src={video2}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
