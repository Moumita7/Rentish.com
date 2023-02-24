const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    hosted_by:{
      type:String,
      required:true,
      default:"rentish"
    },
    owner: {
      type: String,
      required: true,
    },
    url: [{ type: String, required: true }],
    rating: {
      type: Number,
      default: 0,
    },
    total_rating: { 
        type: Number, 
        default: 0 
    },
    city: { 
        type: String, 
        required: true,
        enum:{
          values:["Bangalore","Bhopal","Delhi","Hyderabad","Indore","Mumbai","Pune"],
          message:"Sorry, Currently we are not available in your place."
        } 
    },
    car_title: { 
        type: String, 
        required: true 
    },
    transmission: { 
        type: String, 
        required: true,
        enum:["Manual","Automatic"] 
    },
    fuel_type: { 
        type: String, 
        required: true,
        enum:["Petrol","Diesel"] 
    },
    seats: { 
        type: Number, 
        required: true,
        enum: 
        {
          values:[2,5,7],
          message:"You can only select these seat quantity. Ex.'2,5,7' "
        } 
    },
    per_hour_charge: { 
        type: Number, 
        required: true 
    },
    km_away: { 
        type: Number, 
        required: true 
    },
  },
  { versionKey: false,timestamps:true}
);

const CarModel = mongoose.model("car",carSchema);


module.exports = {CarModel}

// url:[String]
// url:[{type:String,required:true}]
