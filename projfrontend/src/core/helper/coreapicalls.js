import {API} from "../../backend"
require("dotenv").config();


export const getProducts=()=>{

    return fetch(`${API}product`,{method:"GET"})
    .then((response)=>{
        return response.json();
    })
    .catch((err)=>console.log(err));
}