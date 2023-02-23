const { CarModel } = require("../models/car.model")



//! HOSTING AND POSTING THE CAR
const postCar = async(req,res) =>{
    try{
        const newCar = new CarModel({...req.body,hosted_by:req.loggedUser.userId})
        await newCar.save()
        res.status(200).json({message:"Car hosted"})
    }catch(err){
        res.status(500).json({message:"Something went wrong!",error:err.message})
    }
}


//! GETTING ALL THE CARS

/*
All queries
_city
_distance
_popularity


filters
_seats
feul_type
_transmission
_rating

url = http://localhost:4500/cars?distance=asc&popularity=dec
*/
const getAllCars = async(req,res)=>{
    const queries = req.query
    let obj = {
        city:req.loggedUser.city
    };
    let doSort = {};

    for(let key in queries){
        if(key==="search"){
            obj["car_title"]=queries[key];
        }
        else if(key==="seats"){
            obj["seats"]=+queries[key]
        }
        else if(key==="fuel_type"){
            obj["fuel_type"]=queries[key];
        }
        else if(key==="transmission"){
            obj["transmission"]=queries[key];
        }
        else if(key==="rating"){
            obj["rating"]=queries[key];
        }
        else if(key==="city"){
            obj["city"]=queries[key]
        }
        else if(key==="per_hour_charge"){
            if(queries[key]=="asc"){
                doSort["per_hour_charge"]=1
            }
            else{
                doSort["per_hour_charge"]= -1
            }
        }
        else if(key==="best_rated"){
            if(queries[key]=="asc"){
                doSort["rating"]=1
            }
            else{
                doSort["rating"]=-1
            }
        }
        else if(key==="popularity"){
            if(queries[key]=="asc"){
                doSort["total_rating"]=1
            }
            else{
                doSort["total_rating"]=-1
            }
        }

    }
    try{
        const carsData = await CarModel.find(obj).sort(doSort)
        res.status(200).json({message:"Success",data:carsData})
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message})
    }
}

//! GETTING SINGLE CAR FOR DETAILS PAGE

const getSingleCar = async(req,res) =>{
    try{
        const getSingleCarData = await CarModel.find({_id:req.params.Id})
        res.status(200).json({message:"Success",data:getSingleCarData})
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message})
    }
}

//! UPDATE THE CAR DATA

const updateCarDetails = async(req,res) =>{
    try{
        const check = await CarModel.find({_id:req.params.Id})
        if(check[0].hosted_by===req.loggedUser.userId || req.loggedUser.isAdmin===true){
            try{
                await CarModel.findByIdAndUpdate(req.params.Id,req.body)
                res.status(200).json({message:"Data has been updated."})
            }catch(err){
                res.status(500).json({message:"server error",error:err.message})
            }
        }
        else{
            res.status(403).json({message:"you are not authorized."})
        }
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message})
    }
}


//! DELETE THE POST BY UESR AND ADMIN
const deleteCar = async(req,res) =>{
    try{
        const check = await CarModel.find({_id:req.params.Id})
        if(check[0].hosted_by===req.loggedUser.userId || req.loggedUser.isAdmin===true){
            try{
                await CarModel.findByIdAndRemove(req.params.Id)
                res.status(200).json({message:"Car has been Deleted."})
            }catch(err){
                res.status(500).json({message:"server error",error:err.message})
            }
        }
        else{
            res.status(403).json({message:"you are not authorized."})
        }
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message})
    }
}



module.exports = {postCar,getAllCars,getSingleCar,updateCarDetails,deleteCar}