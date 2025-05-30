import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";  

const app = express();

app.use(cors({
   origin : process.env.CORS_ORIGIN,
   credentials: true,
}))

app.use(express.json({limit :"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRoutes from "./routes/user.router.js"

app.use("/api/v1/user",userRoutes);
console.log("middle-ware is working")

export { app};
//app is exported