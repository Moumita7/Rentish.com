const jwt = require("jsonwebtoken")
require("dotenv").config()

const userValidator  = (req,res,next) =>{
    const token = req.headers.authentication;
    jwt.verify(token, process.env.secretKey, (err, decoded) =>{
            if(decoded){
                req.loggedUser = {userId:decoded.userId,isAdmin:decoded.isAdmin,city:decoded.city};
                next()
            }
            else{
                res.status(401).json({message:"You are not authorized",error:err})
            }        
      });
}

module.exports = {userValidator}