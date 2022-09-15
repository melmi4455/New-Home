import React from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import { BsStar } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiCurrencyDollar } from "react-icons/hi";
const ListCard = ({ data }) => {
  
  const navigate = useNavigate();
    

    async function Get(res)  {
        try{
            const res = await axios.get(`http://localhost:7000/property/${data._id}`);
            navigate("/homedetails")
        } catch(e){
            console.log(e);
        }
        
        
       

    }








  return (

    <div className="text-blue-700">
      <div className="flex flex-col justify-center  bg-white drop-shadow-lg shadow-lg rounded-md overflow-hidden">
        {/* descriptions */}
        <div className=" ">
          <img
            className="w-full min-h-[10rem]  rounded-sm object-cover"
            src={`http://localhost:7000/${data.image}`}
            alt="homecard "
          />
          <div>
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-100 p-3 w-72 flex items-center">
              <div className=" text-2xl  ">{data.city}</div>
              <div className="flex items-center pl-10">
                <HiCurrencyDollar />
                {data.price}
              </div>
              <div className="flex items-center">
                <GoLocation />
                {data.address}
              </div>
            </div>
            <div className="text-md text-blue-600 p-3 items-center">
              <h4 className="font-bold text-md">Description </h4>
              {data.description}
            </div>

            <div className="flex items-center p-20 py-4">
              <Link to={`/homedetails/${data._id}`}>
              <button className="bg-blue-500 rounded-lg p-1 text-white font-bold drop-shadow-lg" >More Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;