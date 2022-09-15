import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";

const SignUp = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // useEffect(()=>{
  //   const token = localStorage.removeItem("token");
  // }, []);

  async function Submit() {
    try {
      const res = await axios.post("http://localhost:7000/user/signup", input);
      console.log(res);
      toast.success(res.data.message); 
      localStorage.setItem("token", res.data.token);
      navigate("/");
      setUser(true);

      ;
    } catch (e) {
      toast.error(e.response.data.message);
    }
  } 


return (

      <div className="h-screen bg-gradient-to-br from-white  flex justify-center items-center w-full">
        <div>
          <div className="bg-blue-500 mt-20 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-2">
              <h1 className="text-center text-2xl font-extrabold text-white mb-2">Register</h1>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Enter Fullname</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500" 
                 onChange={(e) => setInput({ ...input, Name: e.target.value })}/>
              </div>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Enter Email</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500" 
                 onChange={(e) => setInput({ ...input, email: e.target.value })}/>
              </div>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Enter Password</label>
                <input type="password"  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500" 
                 onChange={(e) => setInput({ ...input, password: e.target.value })}/>
              </div>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Confirm Password</label>
                <input type="password"  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500" 
                 onChange={(e) =>setInput({ ...input, confirmPassword: e.target.value })}/>
              </div>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Enter Phone Number</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500" 
                 onChange={(e) => setInput({ ...input, phone: e.target.value })}/>
              </div>
              <div>
                <label  className="block mb-1 text-white font-bold">Please Enter Address</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-lg font-extrabold text-blue-500"
                 onChange={(e) => setInput({ ...input, address: e.target.value })} />
              </div>
              <select
               className="px-3 py-1 rounded-sm outline-none"
               onChange={(e) => setInput({ ...input, role: e.target.value })}
               >
               <option value="user">User</option>
               <option value="owner">Home Owner</option>
               </select>
            </div>
            <button className="font-extrabold mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white py-2 rounded-md text-lg tracking-wide hover:bg-gray-500" 
             onClick={Submit}>Register</button>
             <p className="text-center font-bold text-white">Already have an account? <Link to="/login"><a className="text-white hover:underline text-lg" href="#"> Sign in</a></Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;