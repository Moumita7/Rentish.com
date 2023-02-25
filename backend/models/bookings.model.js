const { default: mongoose } = require("mongoose");

const bookingSchema = mongoose.Schema({
    carId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"car",
        immutable:true    
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'user',
        immutable:true}
},{versionKey:false,timestamps:true})

const BookingModel = mongoose.model("booking",bookingSchema);

module.exports = {BookingModel};