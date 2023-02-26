import * as types from "./actionTypes"


//get all users
export const get_All_users = () => async(dispatch) => {
    console.log("hell")
    dispatch({ type: types.ADMIN_LOADING })
    let token=localStorage.getItem("token")
   // console.log(token)
    try {
    // let ress=await axios.get("https://worrisome-tick-tights.cyclic.app/users",{Headers:{"Authentication":token}})
    let ress= await fetch("https://worrisome-tick-tights.cyclic.app/users",{
        method:"GET", 
        headers:{
            "Content-Type":"Application/json",
            "Authentication":token
        },
    })
    let data=await ress.json()
    console.log(ress)
    console.log("data",data.data)
    dispatch({ type: types.ADMIN_SUCCESS_USERS, payload: data.data });

     
    } catch (error) {
        console.log(error.message)
    }

}


export const get_All_cars = () => async(dispatch) => {
    console.log("hell")
    dispatch({ type: types.ADMIN_LOADING })
    let token=localStorage.getItem("token")
   // console.log(token)
    try {
    // let ress=await axios.get("https://worrisome-tick-tights.cyclic.app/users",{Headers:{"Authentication":token}})
    let ress= await fetch("https://worrisome-tick-tights.cyclic.app/cars",{
        method:"GET", 
        headers:{
            "Content-Type":"Application/json",
            "Authentication":token
        },
    })
    let data=await ress.json()
    console.log(ress)
    console.log("data",data.data)
    dispatch({ type: types.ADMIN_SUCCESS_CARS,payload: data.data });

     
    } catch (error) {
        console.log(error.message)
    }

}

export const get_All_booking = () => async(dispatch) => {
    console.log("hell")
    dispatch({ type: types.ADMIN_LOADING })
    let token=localStorage.getItem("token")
   // console.log(token)
    try {
    // let ress=await axios.get("https://worrisome-tick-tights.cyclic.app/users",{Headers:{"Authentication":token}})
    let ress= await fetch("https://worrisome-tick-tights.cyclic.app/booking",{
        method:"GET", 
        headers:{
            "Content-Type":"Application/json",
            "Authentication":token
        },
    })
    let data=await ress.json()
    console.log(ress)
    console.log("data",data.data)
    dispatch({ type: types.ADMIN_SUCCESS_BOOKING,payload: data.data });

     
    } catch (error) {
        console.log(error.message)
    }

}




// /booking