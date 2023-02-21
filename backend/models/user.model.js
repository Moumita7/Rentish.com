const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true 
    },
    gender: {
        type: String, 
        required: true, 
        enum: ["male", "female", "other"] 
    },
    avatar: {
      type: String,
      required: false,
      default:
        "https://w7.pngwing.com/pngs/717/24/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail.png",
    },
    isAdmin: { 
        type: Boolean,
        required:false,
        default:false
    },
    isActive:{
        type:Boolean,
        required:false,
        default:false
    },
    phone:{
        type:Number,
        maxLength:10,
        require:false,
        default:1
    }
  },

  { 
    versionKey: false, 
    timestamps: true 
}
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
