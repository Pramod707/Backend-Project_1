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
        required : true,
    },
  
    watchHistory :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "video"
        }
    ],
    
    createdAt :{
        type : Date,
        default : Date.now,
    }
})


export const userModel = mongoose.model("user",userSchema);