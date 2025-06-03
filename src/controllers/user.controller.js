import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/APierrHandle.js";
import user from "../models/user.model.js";
import { APIresponce } from "../utils/APIresponce.js";
export const userRegister = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log("email:", email);
  console.log("password", password);

  if ([fullName, email, password].some((fields) => fields?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const ExistedUser = user.findOne({
    $or: [{ email }, { user }],
  });



  if (ExistedUser) {
    throw new ApiError(409, "User already exists");
  }

  const avataarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
  
     if (!avataarLocalPath) {
      throw new ApiError(400, "avatar is required");
      
     }
     const user = await user.create({
      fullName,
      avatar: avatar.url,
      coverImage : coverImage.url?.url || "",
      email,
      password,
      username :  username.toLowerCase()
     })
     const userCreated = await user.findById(user._id).select(
      "-password -refreshToken")
      if (!userCreated) {
        throw new ApiError(500, "error while creating user");
      }
      return res.status(201).json(

        new APIresponce(200,"user created successfully",userCreated)
      )
});

// controllers/user.controller.js
// import asyncHandler from "../utils/asyncHandler.js";

// export const userRegister = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// })
