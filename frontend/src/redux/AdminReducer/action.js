import * as types from "./actionTypes"
import axios from "axios"

//get all users
export const get_All_users = () => async(dispatch) => {
    dispatch({ type: types.ADMIN_LOADING })
    let token=localStorage.getItem("token")
    console.log(token)
    try {
    // let ress=await axios.get("https://worrisome-tick-tights.cyclic.app/users",{Headers:{"Authentication":token}})
    let ress= await fetch("https://worrisome-tick-tights.cyclic.app/users",{
        method:"GET",
        
        headers:{
            "Content-Type":"Application/json",
            "Authentication":token},
    })
    let data=await ress.json()
    console.log(data.data)
     
    } catch (error) {
        console.log(error.message)
    }

}