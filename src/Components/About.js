import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

const About = () => {

  return (
    <div className="px-20 py-20 text-blue-600">
      <div className="flex flex-col justify-center items-center shadow-sm w-full">
        <h3 className="text-2xl font-extrabold ">About Us</h3>
        <p>
          <span className="text-2xl font-bold text-blue-700">We</span> are lorem
          Lorem ipsum dolor sit amet, consectetur
          <br></br>
          adipiscing elit, sed do eiusmod tempor incididunt ut<br></br>
          labore et dolore magna aliqua. Ut enim ad minim veniam,<br></br>
          quis nostrud exercitation ullamco laboris nisi ut aliquip
        </p>
      </div>
      <div className=" flex justify-center px-3 py-6 ">
        <div
          className="grid grid-cols-2 gap-10 bg-white text-gray-700 w-3/4 min-h-[10rem] 
        shadow-lg rounded-md overflow-hidden "
        >
          <div className="flex  items-center space-x-2 px-3 py-2 border border-blue-700 ">
            <RiNumber1 size={20} className="text-blue-500 rounded-full" />

            <div>
              <h3 className="text-center text-blue-600 font-extrabold p-1">Our mission</h3>
              <h3 className="text-blue-600">
                With our immense real-time rental database<br></br>
                and advanced search, we make it easy to find<br></br>
                the perfect apartment.<br></br>
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-2 border border-blue-700">
            <RiNumber2 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h3 className="text-center text-blue-600 font-extrabold p-1">Our mission</h3>
              <h3 className="text-blue-600">
                We Help you discover your new home or condo using our targeted
                filters Browse images, <br></br>floor plans, video, and 3D tours
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 px-3 py-2 border border-blue-700">
            <RiNumber3 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h3 className="text-center text-blue-600 font-extrabold p-1">Our Vision</h3>
              <h3 className="text-blue-600">
                Home rental is a premier real estate portal for<br></br>
                property owners to maximize exposure and<br></br>
                lease properties faster.
              </h3>
            </div>
          </div>
          <div className="flex  items-center space-x-2 px-3 py-2 border border-blue-700">
            <RiNumber4 size={20} className="text-blue-500 rounded-full" />
            <div>
              <h4 className="text-center text-blue-600 font-bold p-1">Our Services</h4>
              <h3 className="text-blue-600">
                home rental is a premier real estate portal for<br></br>
                property owners to maximize exposure and<br></br>
                lease properties faster.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
