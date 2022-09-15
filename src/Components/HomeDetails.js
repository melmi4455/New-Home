import { data } from "autoprefixer";
import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";

const HomeDetails = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  
  

   useEffect(()=>  {  

//   const token = localStorage.getItem("token")
    
    axios
    .get(`http://localhost:7000/property/${id}`).then((res)=>setInput(res.data.message))
//  setInput(res));

 
    } ,[]
   );
   console.log(input)




  
  return (
    
        <div className="flex justify-center py-20 text-blue-600">
          <div className="flex justify-center items-center shadow-lg rounded-2xl border ">
            <div className="flex flex-col justify-center items-center">
              <div>
              <img
                src={`http://localhost:7000/${input.image}`}
                alt="home"
                className="w-96 h-52 border-2 shadow-md rounded-md w-full"
              />
              </div>
              <div className="rounded-3xl p-2 ">
                <h3 className="font-bold">Magaalada {input.city}</h3>
                <p className="font-bold">{input.district}</p>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <button className=" border border-blue-800 text-blue-600 text-sm font-bold rounded-md ">
                  Rooms=
                  {input.rooms}
                  </button>
                  <button className="border border-blue-800 text-blue-600text-sm font-bold rounded-md p-1">
                    Area = {input.address}
                  </button>
                  <button className="border border-blue-900 text-blue-600 text-sm font-bold rounded-md p-1">
                    Phone = {input.phone}
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  {/* Description */}
                  <h3 className="text-xl font-bold">{input.description}</h3>
                  <h2 className="text-xl text-blue-600 font-extrabold">${input.price}/month</h2>
                  <button className="bg-blue-500 font-bold text-white text-sm px-1 py-2 mt-3 mb-2 rounded-md drop-shadow-lg">
                    Contact Owner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  

export default HomeDetails;
