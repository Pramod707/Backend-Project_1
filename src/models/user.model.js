import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    user :{
        type : String,
        required : true,
    }
})


export const userModel = mongoose.model("user",userSchema);