const express = require("express");
const { postCar, getAllCars, getSingleCar, updateCarDetails, deleteCar } = require("../controllers/car.controllers");
const { userValidator } = require("../middlewares/user.validator.middleware");

const carRouter = express.Router();

carRouter.use(userValidator);
carRouter.post("/",postCar);
carRouter.get("/",getAllCars);
carRouter.get("/:Id",getSingleCar);
carRouter.patch("/:Id",updateCarDetails);
carRouter.delete("/:Id",deleteCar)


module.exports = {carRouter};