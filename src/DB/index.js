import mongoose from "mongoose";
import { BACKEND_DB } from "../constants.js";

const connectDB = async()=>{

    try {
        
       const connectionInterface = await mongoose.connect(`${process.env.MONGODB_URL}/${BACKEND_DB}`);
         console.log(`\n database is connected !! ${connectionInterface.connection.host}`)
        
    } catch (error) {
        console.log("error",error);
        process.exit(1);
    }

}

export default connectDB