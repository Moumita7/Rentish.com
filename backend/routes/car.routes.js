const express = require("express");
const { postCar, getAllCars } = require("../controllers/car.controllers");
const { userValidator } = require("../middlewares/user.validator.middleware");

const carRouter = express.Router();

carRouter.use(userValidator)
carRouter.post("/",postCar);
carRouter.get("/",getAllCars);


module.exports = {carRouter};