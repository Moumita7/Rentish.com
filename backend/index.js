const express = require("express");
const { rentishDB } = require("./config/db");
require("dotenv").config();

const app = express();


app.use(express.json());



app.listen(process.env.port,async()=>{
    try{
        await rentishDB
        console.log("Your app has been connected to your 'Rentish database'✅")
    }catch(err){
        console.log(err.message)
    }
    console.log(`Your port is running or port : ${process.env.port} ☑`)
})