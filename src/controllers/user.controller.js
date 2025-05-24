import { asyncHandler } from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async (res,req)=>{
 
     res.status(200).json({
        message : "ok",
     })

})
export{userRegister}