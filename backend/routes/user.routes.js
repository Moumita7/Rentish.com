const express = require("express");
const { register } = require("../controllers/user.controllers");


const userRouter = express.Router()

userRouter.post("/register",register);

module.exports  = {userRouter}