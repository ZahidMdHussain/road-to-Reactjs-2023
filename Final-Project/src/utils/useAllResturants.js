// not being used now due to some bug
// created for API call under Main.js 

import { useState, useEffect } from "react";

const useAllResturants = () => {

    const [listresturant, setListRestaurant] = useState([]);

    useEffect(() => {
        getApiData()
    },[])

    // api call functions
    async function getApiData(){
        const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return listresturant;
    
}

export default useAllResturants;