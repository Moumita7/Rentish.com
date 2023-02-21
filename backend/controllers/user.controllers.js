const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res) => {
  const { email, password} = req.body;
//   if (
//     email &&
//     password
//     ) {
    try {
      const check = await UserModel.find({ email });
      console.log("check:", check);
      if (!check.length) {
        bcrypt.hash(password, 3, async (err, hash) => {
          if (err) {
            res.status(200).json({ error: err });
          } else {
            try{
                const newUser = new UserModel({ ...req.body, password: hash });
                await newUser.save();
                res.status(201).json({ message: "New user has been added."});
            }catch(err){
                res.status(500).json({ message: "Something went wrong",error:err.message });
            }
          }
        });
      } else {
        res.status(409).json({ message: "User already axist" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
//   } 
//   else {
//     res.status(400).json({ message: "These are some required field which you have to be filled..." });
//   }
};

module.exports = {register}