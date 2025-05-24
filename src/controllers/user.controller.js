import  asyncHandler  from "../utils/asyncHandler.js";

export const userRegister = asyncHandler(async (req,res)=>{
 
     res.status(200).json({
        message : "ok",
     });

});

// controllers/user.controller.js
// import asyncHandler from "../utils/asyncHandler.js";

// export const userRegister = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// });
