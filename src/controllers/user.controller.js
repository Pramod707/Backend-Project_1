import { asyncHandler } from "../utils/asyncHandler";

const user = asyncHandler(async (res,req)=>{
 
     res.status(200).json({
        message : "ok",
     })

})