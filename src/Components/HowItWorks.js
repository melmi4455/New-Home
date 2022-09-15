import React from "react";

const HowItWorks = () => {
  return (
    <div className=" flex justify-center px-3 py-6">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex  items-center space-x-5">
          <img
            src={require("../img/search.png")}
            alt="home"
            className="w-20 h-12"
          />
          <div>
            <h3 className="text-blue-600 font-bold">
              With our immense real-time rental database<br></br>
              and advanced search, we make it easy to find<br></br>
              the perfect house for rent.<br></br>
            </h3>
            {/* <button className="border border-blue-500 text-blue-500 font-bold text-sm rounded-md p-2 m-2">
              Search for Rents
            </button> */}
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <img
            src={require("../img/home.jpg")}
            alt="home"
            className="w-20 h-12"
          />
          <div>
            <h3 className="text-blue-600 font-bold">
              Discover your new home or condo using our targeted<br></br>
              filters Browse images, <br></br>floor plans, video, and 3D tours
            </h3>

            {/* <button className="border border-blue-500 text-blue-500 font-bold text-sm rounded-md p-2 m-2">
              Search for Rents
            </button> */}
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <img
            src={require("../img/hand.jpg")}
            alt="home"
            className="w-20 h-12"
          />
          <div>
            <h3 className="text-blue-600 font-bold">
              Home rental is a premier real estate portal for<br></br>
              property owners to maximize exposure and<br></br>
              lease properties faster.
            </h3>
            {/* <button className="border border-blue-500 text-blue-500 font-bold text-sm rounded-md p-2 m-2">
              Search for Rents
            </button> */}
          </div>
        </div>
        <div className="flex  items-center space-x-5">
          <img
            src={require("../img/hand.jpg")}
            alt="home"
            className="w-20 h-12"
          />
          <div className="px-3  ">
            <h3 className="text-blue-600 font-bold">
              Home rental is a premier real estate portal for<br></br>
              property owners to maximize exposure and<br></br>
              lease properties faster.
            </h3>
            {/* <button className=" text-blue-600 font-bold text-sm rounded-md p-2 m-2 border border-blue-600">
              Search for Rents
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
