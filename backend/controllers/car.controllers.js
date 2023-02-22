const { CarModel } = require("../models/car.model")

const postCar = async(req,res) =>{
    try{
        const newCar = new CarModel({...req.body,hosted_by:req.loggedUser.userId})
        await newCar.save()
        res.status(200).json({message:"Car hosted"})
    }catch(err){
        res.status(500).json({message:"Something went wrong!",error:err.message})
    }
}

const getAllCars = async(req,res)=>{
    try{
        // const carsData = CarModel.find()
        res.status(200).json({message:req.loggedUser})
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message})
    }
}



module.exports = {postCar,getAllCars}