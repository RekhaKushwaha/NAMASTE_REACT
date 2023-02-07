import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../constants";
import { IMG_CDN_URL} from "../constants";
import Shimmer from "./shimmer";

const ResturantMenu = () =>{
    const [resturantDetails, setResturantDetails] = useState(null);
    const param = useParams();
    const {id} = param;
    //console.log(param);

    //API call
    useEffect(() => {
        getResturantInfo();
    },[]
    )
    async function getResturantInfo(){
        const data = await fetch(SWIGGY_MENU_API + id);
        const json = await data.json();
        console.log(json?.data);
        setResturantDetails(json?.data);
    }
    return (!resturantDetails)? <Shimmer/> : (
        <div>
            <h1>
              Resturant Id : {id}
            </h1>
            <h2>{resturantDetails.name}</h2>
            <img src={IMG_CDN_URL + resturantDetails.cloudinaryImageId}/>
            <h3>{resturantDetails.area}</h3>
            <h3>{resturantDetails.city}</h3>
            <div className="menu">
                <h1>MENU</h1>
                <ul>{Object.values(resturantDetails?.menu?.items).map((item)=> (
                <li key={item.id}>{item.name}</li>
                ))}</ul>
                
            </div>
        </div>
    )
    }
    
    export default ResturantMenu;