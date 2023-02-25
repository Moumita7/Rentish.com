const express = require("express");
const { register, login, getAllUser, getSingleUser, updateUser, deleteUser, verifyMail } = require("../controllers/user.controllers");
const { userValidator } = require("../middlewares/user.validator.middleware");


const userRouter = express.Router()

userRouter.get("/",userValidator,getAllUser);
userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/verify",verifyMail);
userRouter.get("/:Id",userValidator,getSingleUser);
userRouter.patch("/:Id",userValidator,updateUser);
userRouter.delete("/:Id",userValidator,deleteUser);
module.exports  = {userRouter}