const express = require("express");
const { rentishDB } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { carRouter } = require("./routes/car.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users",userRouter);
app.use("/cars",carRouter);


app.get("*",(req,res)=>{
    res.status(404).json({message:"Wrong endpoint"})
})
app.post("*",(req,res)=>{
    res.status(404).json({message:"Wrong endpoint"})
})
app.patch("*",(req,res)=>{
    res.status(404).json({message:"Wrong endpoint"})
})
app.put("*",(req,res)=>{
    res.status(404).json({message:"Wrong endpoint"})
})
app.delete("*",(req,res)=>{
    res.status(404).json({message:"Wrong endpoint"})
})


app.listen(process.env.port,async()=>{
    try{
        await rentishDB
        console.log("Your app has been connected to your 'Rentish database'✅")
    }catch(err){
        console.log(err.message)
    }
    console.log(`Your port is running or port : ${process.env.port} ☑`)
})