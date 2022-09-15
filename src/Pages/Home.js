import FeatureCars from "../Components/FeatureCars";
import ListCard from "../Components/ListCard";
import HowItWorks from "../Components/HowItWorks";
import Hero from "../Components/Hero";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios"
import {useEffect , useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import {MdOutlineCancel} from "react-icons/md"


const Home =() => {
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [city,setCity] = useState("");
  const [filter,setFilter] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:7000/property/", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
      setProperty(res.data.data)});
      setCity("");
     
  }, []);
  async function get(){
    try{
      const res= await axios.get(`http://localhost:7000/property/filter/${city}`);
      setFilter(res.data.filtered);
      console.log(filter);
    }
    catch(e){
      console.log(e);
    }
   

  }
  async function refresh() {
    try{
      setFilter();
      setCity("");
      
      

    } catch(e){
      console.log(e)
    }
  }
  console.log(property)
  console.log(filter)
  console.log(city)
  
  return (
    <div>
      {/* hero section */}
      {/* <Hero /> */}
      <div className="bg-[url('./img/feature-img.jpg')] bg-bottom bg-no-repeat bg-cover h-[450px] w-full flex justify-center items-center ">
      <div className="w-full m-h-[10rem]">
        <h3 className="text-center text-white text-3xl font-bold pb-24">
          <span className="text-blue-500 text-md font-bold">
            {" "}
            Search Your Next Home{" "}
          </span>
          Find new & <br></br> featured property located{" "}
          <span className="text-blue-400">
            in your local city <br></br>{" "}
          </span>
        </h3>
        <div className=" flex justify-center pb-10 ">
          <div className="flex justify-center  bg-white  w-2/4 m-h-[10rem] rounded-lg p-2 space-x-5 drop-shadow-lg border border-lg border-blue-600">
            <div className="input">
              <h4 className="font-bold pb-2 text-blue-600 text-lg">City</h4>
              <input
              value={city}
                type="text"
                placeholder=" Please enter location..."
                className="border border-gray-300 outline-none"
                onChange={(e)=>setCity(e.target.value)} />
            </div>
            {/* <div className="input">
              <h4>property type</h4>
              <input
                type="text"
                placeholder=" property type..."
                className="border border-gray-300 outline-none"
              />
            </div>
            <div className="input">
              <h4>Price range</h4>
              <input
                type="text"
                placeholder=" price... "
                className="border border-gray-300 outline-none"
              />
            </div> */}
            <div className="flex items-center pl-20 space-x-3 ">
              <h4 className="text-blue-600 font-extrabold text-lg">Advanced filter</h4>
              <button className=" bg-blue-600 p-2 rounded-full" onClick={get}>
                <BiSearch size={20} className="text-white" />
              </button>
              <button className=" bg-blue-600 p-2 rounded-full" onClick={refresh}>
                <MdOutlineCancel size={20} className="text-white"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* FeatureCars */}
      <div className="px-20 py-5">
        <h2 className="text-center text-blue-600 font-extrabold text-3xl py-10">
          Find the best property
        </h2>
        {filter? (
          <div className="flex flex-wrap grid grid-cols-4 justify-center gap-x-5 gap-y-5 drop-shadow-lg ">
          {/* <FeatureCars />
          <FeatureCars />
          <FeatureCars /> */}
          {filter.map((found) => (
            <ListCard data={found} />
          ))}</div>):(
            <div className="flex flex-wrap grid grid-cols-4 justify-center gap-x-5 gap-y-5 drop-shadow-lg ">
          {/* <FeatureCars />
          <FeatureCars />
          <FeatureCars /> */}
          {property.map((found) => (
            <ListCard data={found} />
          ))}
          <div className="flex items-center pl-5 ">
            <Link to="/PropertyList">
              <FaArrowRight size={30} className=" text-blue-700" />
              <p className="text-blue-700 text-lg font-extrabold">View All</p>
            </Link>
          </div>
        </div>

          )}
        
        
      </div>
      {/* How it work */}
      <h2 className="text-center text-blue-600 text-2xl font-extrabold text-2xl pt-20 py-2">
        How it works
      </h2>
      <HowItWorks />
    </div>
  );
}

export default Home;
