const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    url: [{ type: [String], required: true }],
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
        required: true 
    },
    car_title: { 
        type: String, 
        required: true 
    },
    transmission: { 
        type: String, 
        required: true 
    },
    fuel_type: { 
        type: String, 
        required: true 
    },
    seats: { 
        type: Number, 
        required: true 
    },
    revenue_price_discounted: { 
        type: Number, 
        required: true 
    },
    revenue_distance: { 
        type: Number, 
        required: true 
    },
  },
  { versionKey: fales }
);

const CarModel = mongoose.model("car",carSchema);


module.exports = {CarModel}

// url:[String]
// url:[{type:String,required:true}]
