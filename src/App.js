import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
// import UpdateProfile from "./Pages/UpdateProfile";
import HomeDetails from "./Components/HomeDetails";
import NewHome from "./Pages/Owner/NewHome";
import AllHomes from "./Pages/Owner/AllHomes";
import EditHome from "./Pages/Owner/EditHome";
import PropertyList from "./Pages/PropertyList";
import Protect from "./Protect";
import Footer from "./Components/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About";
import Login from "./Pages/Login";
import axios from "axios";
import { UserContext } from "./Utils/UserContext";
import UpdateProfile from "./Pages/Owner/UpdateProfile";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //check if user is signup
    //if user is signup setuser  true

    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <h3>loading</h3>;

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/PropertyList" element={<PropertyList />} />
            <Route path="/homedetails/:id" element={<HomeDetails />} />
            

            <Route path="/owner" element={<Protect />} >
            <Route path="newhome" element={<NewHome />} />
            <Route path="allhomes" element={<AllHomes />} />
            <Route path="edithome/:id" element={<EditHome />} />
            <Route path="updateprofile" element={<UpdateProfile/>} />

            </Route>
            {/* </Route> */}
          </Routes>

          <About />
          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
