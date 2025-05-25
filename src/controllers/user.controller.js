import  asyncHandler  from "../utils/asyncHandler.js";

export const userRegister = asyncHandler(async (req,res)=>{
 
      const {fullName,email,password} = req.body;
       console.log("email:" , email);
});

// controllers/user.controller.js
// import asyncHandler from "../utils/asyncHandler.js";

// export const userRegister = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// });
