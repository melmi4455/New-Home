import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import {useEffect} from "react"

function Login() {
  const {setUser} = useContext(UserContext);
  const [input, setInput] = useState({});
  const navigate = useNavigate();


  // useEffect(()=>{
  //   const token = localStorage.removeItem("token");
  // }, []);

  async function bySubmit() {
    try {
      const res = await axios.post("http://localhost:7000/user/login", input);
      console.log(res);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      setUser(true);
    } catch (e) {
      toast.error(e.response.data.message);
      console.log(e)
    }
  }
    


return (

      {/* component */}
      
      ,<div className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto bg-blue-500 p-4 mt-4 rounded-md">
            <div className="text-center mb-8">
              <a className="inline-block mx-auto mb-6" href="#">
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
              </a>
              <h2 className="text-3xl md:text-2xl font-extrabold mb-2 text-white">Sign in</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="block mb-2 font-extrabold text-white">Email</div>
                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-white rounded text-blue-500" type="email" 
                  onChange={(e) => setInput({ ...input, email: e.target.value })} />
              </div>
              <div className="mb-6">
                <div className="block mb-2 font-extrabold text-white">Password</div>
                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-white rounded text-blue-500" type="password" 
                  onChange={(e) => setInput({ ...input, password: e.target.value })} />
              </div>
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <div>
                    {/* <input type="checkbox" />
                    <span className="ml-1 font-extrabold">Remember me</span> */}
                  </div>
                </div>
                {/* <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div> */}
              </div>
              <button className="inline-block w-1/2 py-4 px-6 mb-6 text-center text-lg leading-6 text-blue-500 font-extrabold bg-white  border-3 border-white shadow rounded transition duration-200 border-blue-500" onClick={bySubmit}>Sign in</button>
              <p className="text-center font-bold text-white">Dont have an account? <Link to="/signup"><a className="text-white hover:underline text-lg font-bold" href="#"> Sign up</a></Link></p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Login;