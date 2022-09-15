import React from "react";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

import ListCard from "../Components/ListCard";
import Hero from "../Components/Hero";

const PropertyList = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:7000/property/", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setProperty(res.data.data));
  }, []);
  // console.log(property);
  return (
    <div>
      <div className="bg-[url('./img/feature.jpg')] bg-bottom bg-no-repeat bg-cover h-[450px] w-full flex justify-center items-center ">
        <div className="w-full m-h-[10rem]">
          <h3 className="text-center text-white text-3xl font-bold pb-24 ">
           A Full List of Houses availabe{" "}
            <span>
              Find Houses  <span className="text-blue-500">& </span>
              for Rent <br></br> located in your{" "}
              <span className="text-blue-500"> prefered locations</span>
            </span>
          </h3>
          <div className=" flex justify-center  ">
            {/* <div className="flex justify-center  bg-gray-50  w-3/4 m-h-[10rem] rounded-lg p-2 space-x-5 ">
              <div className="input  ">
                <h4>City/street</h4>
                <input
                  type="text"
                  placeholder=" location..."
                  className="border border-gray-300 outline-none"
                />
              </div>
              <div className="input ">
                <h4>property type</h4>
                <input
                  type="text"
                  placeholder=" property type..."
                  className=" border border-r-yellow-500 outline-none"
                />
              </div>
              <div className="input">
                <h4>Price range</h4>
                <input
                  type="text"
                  placeholder=" price... "
                  className="border border-gray-300 outline-none"
                />
              </div>
              <div className="flex items-center pl-20 space-x-3 ">
                <h4 className="text-black font-bold">Advanced filter</h4>
                <button className=" bg-blue-600 p-5 rounded-lg">
                  <BiSearch size={20} className="text-white" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-4 w-fit gap-10 drop-shadow-lg ">
          {property.map((found) => (
            <ListCard data={found} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;