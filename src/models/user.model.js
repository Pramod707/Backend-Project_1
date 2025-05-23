import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    user :{
        type : String,
        required : true,
        unique : true,
    },

    email :{
        type : String,
        required : true,
        unique : true,
        trim : true
    },

    fullName :{
        type : String,
        required : true,
        trim : true,
        index : true
    },

    avatar:{
        type : String,
        required : true,
    },
    coverImage : {
        type : String,
        
    },  
    password : {
        type : String,
        required : [true, "password is required"],
    },
  
    watchHistory :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "video"
        }
    ],

    refreshToken :{
        type : String,

    }
   
},{timestamps: true})


export const user = mongoose.model("user",userSchema);