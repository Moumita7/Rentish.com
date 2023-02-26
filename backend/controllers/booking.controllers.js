const { BookingModel } = require("../models/bookings.model");

const getBookingCar = async (req, res) => {

  try {
    if(req.query.access==="admin" && req.loggedUser.isAdmin==="admin"){
      const bookedData = await BookingModel.find().populate(["carId", 'userId'])
      res.status(200).json({ message: "Success" ,data:bookedData});  
    }
    else{
      const bookedData = await BookingModel.find({userId:req.loggedUser.userId}).populate(["carId", 'userId'])
      res.status(200).json({ message: "Success" ,data:bookedData});
    }
  } catch (err) {
    res.status(500).json({message:"Something went wrong",error:err.message})
  }
};

const postBookingCar = async (req, res) => {
  try {
    console.log(req.loggedUser);
    const newBooking = new BookingModel({
      userId: req.loggedUser.userId,
      carId: req.params.Id,
    });
    await newBooking.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong.", error: err.message });
  }
};

module.exports = { postBookingCar, getBookingCar };
