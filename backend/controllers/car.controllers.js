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
const getAllCars = async(req,res)=>{
    try{
        const carsData = await CarModel.find({city:req.loggedUser.city})
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