import axios from "axios";
import React, { useState , useEffect } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  async function Submit() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put("http://localhost:7000/user/updateprofile", input , {
        headers:{
            authorization:token,
        }
    });
      console.log(res);
      toast.success(res.data.message);
    //   localStorage.setItem("token" , res.data.token);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
  return (
    <div className="flex justify-center mt-6 ">
      <div className="bg-blue-400 w-2/5 text-center py-4 drop-shadow-md">
        <h1>Update Profile</h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          {/* <input
            type="text"
            placeholder="Full Name"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          /> */}
          <input
            type="email"
            placeholder=" Email"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="password"
            placeholder=" Old Password"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, oldPassword: e.target.value })}
          />
          <input
            type="password"
            placeholder=" New password"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) =>
              setInput({ ...input, newPassword: e.target.value })
            }
          />
          {/* <input
            type="text"
            placeholder=" Phone Number"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder=" Address"
            className="px-3 py-1 rounded-md outline-none"
            onChange={(e) => setInput({ ...input, address: e.target.value })}
          /> */}
        </div>
        <button className="text-center text-blue-500 rounded-md font-bold bg-white p-2 color-white" onClick={Submit}>
          Update
        </button>
        {/* <div className="pt-2 text-white font-bold">Already have an account? <Link to="/login">Log in here!</Link></div> */}
      </div>
    </div>
  );
};

export default UpdateProfile;
