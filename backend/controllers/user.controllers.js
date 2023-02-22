const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await UserModel.find({ email });
    if (!check.length) {
      bcrypt.hash(password, 3, async (err, hash) => {
        if (err) {
          res.status(200).json({ error: err });
        } else {
          try {
            const newUser = new UserModel({ ...req.body, password: hash });
            await newUser.save();
            res.status(201).json({ message: "New user has been added." });
          } catch (err) {
            res
              .status(500)
              .json({ message: "Something went wrong", error: err.message });
          }
        }
      });
    } else {
      res.status(409).json({ message: "User already axist" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    typeof email == "string" &&
    typeof password == "string"
  ) {
    try {
      const check = await UserModel.find({ email });
      if (check.length) {
        bcrypt.compare(password, check[0].password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                userId: check[0]._id,
                isAdmin: check[0].isAdmin,
              },
              process.env.secretKey,
              { expiresIn: "1h" }
            );

            res.status(200).json({ message: "Login Successful", token: token });
          } else {
            res.status(401).json({ message: "Wrong password" });
          }
        });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    if (!email) {
      res.status(404).json({ message: "Please enter your email!" });
    } else if (!password) {
      res.status(404).json({ message: "Please enter your password!" });
    }
  }
};

//? GET ALL THE USERS FOR ADMIN PANEL
const getAllUser = async (req, res) => {
  console.log("req:", req.loggedUser);
  if (Object.keys(req.loggedUser).length && req.loggedUser.isAdmin === true) {
    try {
      const usersData = await UserModel.find();
      res.status(200).json({ message: "Data found.", data: usersData });
    } catch (err) {
      res
        .status(404)
        .json({ message: "Something went wrong.", error: err.message });
    }
  } else {
    res.status(401).json({ message: "You are not authorized" });
  }
};

//?  GET SINGLE USER DATA

const getSingleUser = async (req, res) => {
  if (
    req.loggedUser.userId === req.params.Id ||
    req.loggedUser.isAdmin === true
  ) {
    try {
      const singleUserData = await UserModel.find({ _id: req.params.Id });
      res.status(200).json({ message: "success", data: singleUserData });
    } catch (err) {
      res
        .status(404)
        .json({ message: "Something went wrongg.", error: err.message });
    }
  } else {
    res.status(401).json({ message: "You are not authorized" });
  }
};

//? UPDATE THE USER INFORMATION

const updateUser = async (req, res) => {
  if (
    req.loggedUser.userId === req.params.Id ||
    req.loggedUser.isAdmin === true
  ) {
    if (
      req.body.isAdmin == undefined ||
      req.body.isAdmin == false ||
      (req.body.isAdmin != undefined && req.loggedUser.isAdmin)
    ) {
      try {
        await UserModel.findByIdAndUpdate(req.params.Id, req.body);
        res.status(200).json({ message: "One item has been updated." });
      } catch (err) {
        res
          .status(404)
          .json({ message: "Something went wrong.", error: err.message });
      }
    } else {
      res.status(403).json({ message: "You don't have privilege." });
    }
  } else {
    res.status(401).json({ message: "You are not authorized" });
  }
};

//? DELETE THE USER BY ADMIN AND USER ITSELF

const deleteUser = async (req, res) => {
  if (
    req.loggedUser.userId === req.params.Id ||
    req.loggedUser.isAdmin === true
  ) {
    try {
      await UserModel.findByIdAndUpdate(req.params.Id, req.body);
      res.status(200).json({ message: "One item has been deleted." });
    } catch (err) {
      res
        .status(404)
        .json({ message: "Something went wrong.", error: err.message });
    }
  } else {
    res.status(401).json({ message: "You are not authorized" });
  }
};

module.exports = { register, login, getAllUser, getSingleUser, updateUser,deleteUser };

// function parseJwt (token) {
//     return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
// }
