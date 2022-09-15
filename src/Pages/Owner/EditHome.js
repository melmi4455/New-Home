import { useState , useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate , useParams } from "react-router-dom";

function EditHome() {
    
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  
  

   useEffect(()=>  {  

//   const token = localStorage.getItem("token")
    
    axios
    .get(`http://localhost:7000/property/${id}`).then((res)=>setInput(res.data.message))
//  setInput(res));

 
    }


,[]);

// console.log(input) 


  async function Upload() {
    try {
      const formData = new FormData();
      formData.append("city", input.city);
      formData.append("district", input.district);
      formData.append("rooms", input.rooms);
      formData.append("bedRooms", input.bedRooms);
      formData.append("price", input.price);
      formData.append("phone", input.phone);
      formData.append("address", input.address);
      formData.append("description", input.description);
      formData.append("image", input.image);

      // console.log(formData);
      
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.put(`http://localhost:7000/property/${id}`, formData, {
        headers: {
          authorization: token,
        },
      });

      navigate("/owner/allhomes");
      console.log(res);
      toast.success(res.data.message);
    } catch (e) {
      console.log(e);
      // toast.error(e.response.data.message);
      console.log(e.message);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="bg-blue-500 w-2/3 mt-20 rounded-md p-4">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl text-white">
            Please fill this form
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <input
            type="text"
            placeholder="City"
            className="m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, city: e.target.value })}
            value={input.city}
          />
          <input
            type="text"
            placeholder="District"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, district: e.target.value })}
            value={input.district}
          />
          <input
            type="Number"
            placeholder="No. of Rooms"
            className=" m-2 p-1 txt-lg outline-none"
            onChange={(e) => setInput({ ...input, rooms: e.target.value })}
            value={input.rooms}
          />
          <input
            type="Number"
            placeholder="Bedrooms"
            className=" m-2 p-1 txt-lg outline-none"
            onChange={(e) => setInput({ ...input, bedRooms: e.target.value })}
            value={input.bedRooms}
          />
          <input
            type="Number"
            placeholder="Price"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, price: e.target.value })}
            value={input.price}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
            value={input.phone}
          />
          <input
            type="text"
            placeholder="Address"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, address: e.target.value })}
            value={input.address}
          />
          <textarea
            placeholder="Description"
            className="m-2 w-fit text-lg pr-40"
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })}
              value={input.description}
          ></textarea>
          <input
            type="file"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
            // value={input.image}
          />
        </div>
        <div className="flex justify-center ">
          <button className="text-bold text-blue-500 font-bold text-blue-500 bg-white rounded-md p-2" onClick={Upload}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditHome;
