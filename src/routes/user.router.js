import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";
import {upload} from "../middleWare/multer.middleware.js";
const router = Router();
router.route("/register").post(
     upload.fields([{
   name : "avataar",
   maxCount : 1,
     },{
  name : coverImage,
maxCount : 1,
     }]),
    
    userRegister

);

export default router;

//user router