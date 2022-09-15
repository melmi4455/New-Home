import React from "react";
import { renderMatches, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import { BsStar } from "react-icons/bs";
import {useEffect} from 'react'
import { toast } from "react-toastify";
const ListCard2 = ({ data }) => {
    const navigate = useNavigate();
    
    

    async function Delete()  {
      
        try{
          
            const res= await axios.delete(`http://localhost:7000/property/${data._id}`);
            
            navigate("/owner/allhomes");
            console.log(res);
            toast.success(res.data.message);
             
            
        } catch(e){
            console.log(e)
        }
        
    }

    
    


  return (
    // LISTS CARDS
    <div className="flex justify-center items-center">
      <div
        className="flex justify-center items-center   w-72 min-h-[10rem] 
    shadow-lg rounded-md overflow-hidden   "
      >
        <div className="rounded-t-2xl ">
          <div className="w-full">
            <img
              src={`http://localhost:7000/${data.image}`}
              alt="homecard "
              className="w-72"
            />
          </div>

          {/* descriptions */}
          <div className="p-5 rounded-t-3xl ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h1 className="text-2xl font-bold">{data.city}</h1>
                <p className="text-sm"> {data.district}</p>
              </div>

              {/* <div className="flex flex-1 space-x-1 pl-12">
                <p>4.5</p>
                <BsStar size={20} className="text-yellow-400" />
              </div> */}
            </div>

            <div className="flex justify-between space-x-2 py-2 text-sm font-bold">
              <h3 className="border border-blue-700 rounded-md p-1">
                Rooms={data.rooms}
              </h3>
              <h3 className="border border-blue-700 rounded-md p-1">
                {data.address}
              </h3>
              <h3 className="border border-blue-700 rounded-md p-1">{data.phone}</h3>
            </div>

            <div className="space-y-3">
              <h2>{data.description}</h2>
              <p className="text-sm font-bold ">
                ${data.price}
                <span className="text-sm font-light">/Month</span>
              </p>

              <div className="flex grid grid-cols-2 justify-center items-center w-full">
                <Link to= {`/owner/edithome/${data._id}`}>
                <button className="rounded-lg bg-blue-600 text-white px-12">
                  Edit   
                </button></Link>
                <button className="rounded-lg bg-blue-600 text-white px-5" onClick={Delete}>
                 Delete 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard2;
