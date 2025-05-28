import  asyncHandler  from "../utils/asyncHandler.js";
export const userRegister = asyncHandler(async (req,res)=>{
 
      const {fullName,email,password} = req.body;
       console.log("email:" , email);
       console.log("password",password)
});

// controllers/user.controller.js
// import asyncHandler from "../utils/asyncHandler.js";

// export const userRegister = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// });
