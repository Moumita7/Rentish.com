const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");


const  sendVerifyMail  = async(name,email,id) =>{
    try{
    const transporter =  nodemailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:process.env.user,
            pass: process.env.pass
        }
           })

           const mailOption = {
            from:process.env.user,
            to: email,
            subject:"For Verification mail.",
            html:`
          <div style="width:100%;">
  
  <div style="width:50%;margin:auto;background:transparant">
    <img style="width:100%" src="https://img.freepik.com/free-vector/illustration-e-mail-protection-concept-e-mail-envelope-with-file-document-attach-file-system-security-approved_1150-41788.jpg?w=826&t=st=1677265163~exp=1677265763~hmac=9d9fd3fd7a894b462f3101a6de704ecf3766b1f1fb6b726a5e7142f668a0dff5"/>
  </div>
  <h1 style="text-align:center;">Verify your email address.</h1>
  <div style="text-align:center; font-family:robot,'sens-serif'">
    <p>Hi ${name}, You've entered <i>${email}</i> as the email address for your account <br> Please verify this email address by clicking button below.</p>
  </div>
  <div style="width:fit-content;margin:50px auto;">
    <button style="margin:auto;padding:5px;background-color:#4d7bf8; border:none;border-radius:5px"><a style="font-weight:500;font-size:25px; background-color:#4d7bf8; color:white; text-decoration:none" href="http://localhost:4500/users/verify?id=${id}">Verify your email</a></button>
  </div>
  <div style="width:40%;margin:auto;">
  <img style="width:100%" src="https://user-images.githubusercontent.com/108677306/221280075-ff9e6f31-0edb-4a5c-bda6-f05f0181d2e9.png"/>
  </div>
</div>
          `
           }
           transporter.sendMail(mailOption,(err,info)=>{
            if(err){
              console.log(err)
            }
            else{
              console.log("Email has been sent",info.response)
            }
           })
    }catch(err){
        console.log(err.message)
    }
}


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
            const userData =  await newUser.save();
            if(userData){
              sendVerifyMail(req.body.name,req.body.email,userData._id)
              res.status(201).json({ message: "New user has been added, Please check your email for verification." });
            }
            else{
              res.status(409).json({message:"Registration failed."})
            }
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
      console.log('check:', check)
      if (check.length) {
        bcrypt.compare(password, check[0].password, async (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                userId: check[0]._id,
                isAdmin: check[0].isAdmin,
                city:check[0].city
              },
              process.env.secretKey,
              { expiresIn: "1h" }
            );
            try{
              await UserModel.findByIdAndUpdate(check[0]._id,{isActive:true})
              res.status(200).json({ message: "Login Successful", token: token });
            }
            catch(err){
              res.status(500).json({message:"Something went wrong.",error:err.message})
            }
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


const verifyMail = async(req,res) =>{
 const updateInfo =  await UserModel.findByIdAndUpdate(req.query.id,{isVerify:true});
  res.setHeader("content-type", "text/html")
  res.send(`  <div style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center">
  <div style="overflow:hidden;background-color:#e7e5e7;border-radius:10px;width:50%;margin:auto;position:relative">
    <div style="width:100%"><img style="width:100%" src="https://cdn.dribbble.com/users/2498377/screenshots/7107737/ezgif.com-resize.gif"/>
    <div style="display:grid;place-items:center;width:100%;font-size:20px;left:0;position:absolute;bottom:10%;background-color:#e7e5e7;padding:10px 0"><button style="border:none;background-color:#e7e5e7;height:2%;font-weight:600"><a href="#">Login</a></button></div>
    </div>
  </div>
</div>`);
}

module.exports = { register, login, getAllUser, getSingleUser, updateUser,deleteUser,verifyMail };
