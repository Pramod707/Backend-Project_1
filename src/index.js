import dotenv from "dotenv";
import connectDB from "./DB/index.js";

dotenv.config({ path: './env' });

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`the server is running on http://localhost:${process.env.PORT}`);
    })
.catch((error)=>{
    console.log("dbconnection failed",error);
})
});









// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${"BACKEND_DB"}`);
//     app.on("error"),(error=>{
//         console.log("error",error);
//         throw error;  
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`the serverhttp://localhost:${process.env.port}`);
//     })

//   } catch (error) {
//     console.error("Error", error);
//   }
// })();
