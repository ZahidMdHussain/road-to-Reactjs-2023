import { useState, useEffect } from "react";
import {RESTURANT_API_CALL} from "../confiq"

const useResturant = (id) => {
    const [resturant, setResturant] = useState(null)
    useEffect(() =>{
        getResturantData();
    }, [])

    async function getResturantData(){
        const data = await fetch(RESTURANT_API_CALL+id);
        const json = await data.json();
        setResturant(json.data);
    }
    return resturant
}

export default useResturant