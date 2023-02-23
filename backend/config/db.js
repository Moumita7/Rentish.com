const mongoose = require('mongoose')
require("dotenv").config()

const rentishDB = mongoose.connect(process.env.rentishURL);

module.exports = {rentishDB}