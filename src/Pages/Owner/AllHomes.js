import axios from 'axios'
import { useState , useEffect , useNavigate} from "react";
import {Link} from 'react-router-dom'
import ListCard2 from '../../Components/ListCard2';



const AllHomes = () => {

    const[myHomes,setMyHomes] = useState([]);
    useEffect(()=> {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:7000/property/usersHouses",{
            headers:{
                authorization:token,
            }
        }).then((res)=> setMyHomes(res.data.Houses));
        
        
    },);

           

        return (
        <div className='w-full flex flex-col items-center gap-y-3'>
            <div>
        <h1 className="font-bold pt-10">We have found {myHomes.length} houses you uploaded</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2 pb-3">
          {myHomes.map((found) => (
            <ListCard2 data={found} />
          ))}
        </div>
      </div>

        </div>
        );
        
    
}


export default AllHomes;