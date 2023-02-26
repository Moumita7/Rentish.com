const express = require("express")
const { postBookingCar, getBookingCar } = require("../controllers/booking.controllers")
const { userValidator } = require("../middlewares/user.validator.middleware")


const bookingRouter = express.Router()

bookingRouter.use(userValidator)
bookingRouter.get("/",getBookingCar)
bookingRouter.post("/:Id",postBookingCar)


module.exports = {bookingRouter}