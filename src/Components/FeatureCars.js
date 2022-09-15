import React from "react";
import { MdOutlineLocationOn, MdOutlineBedroomParent } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const FeatureCars = () => {
  return (
    <div className="p-2 flex ">
      <div
        className="gird grid-cols-4  bg-white text-gray-700 w-72 min-h-[10rem] 
        shadow-lg rounded-md overflow-hidden"
      >
        <div
          className=" bg-white text-gray-700 w-72 min-h-[10rem] 
        shadow-2xl rounded-md "
        >
          <div className="z-20">
            <img
              src={require("../img/home1.jpg")}
              alt="home"
              className="w-72 h-60  shadow-md rounded-md  "
            />
          </div>
          <div className="p-5 space-y-2  rounded-t-2xl drop-shadow-2xl    z-50">
            <div className="flex items-center space-x-1 text-sm font-bold text-gray-500">
              <BiDollarCircle size={20} className="text-blue-500" />
              <h2>$400</h2>
            </div>
            <div className="flex items-center space-x-1">
              <MdOutlineLocationOn size={20} className="text-blue-500 " />
              <span>Jigjig yar</span>
            </div>
            <p className="pl-5">Single family house</p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <MdOutlineBedroomParent size={20} className="text-blue-500 " />
                <p>4 Bedrooms</p>
              </div>
            </div>
            <div className="py-2">
              <button className="bg-blue-500 text-white font-bold text-sm p-2 rounded-lg">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCars;
