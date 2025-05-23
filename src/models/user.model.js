import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },

    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
      },
    ],

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.isAccessToken = function () {
  return  jwt.sign({
    _id: this._id,
    email: this.email,
    fullName: this.fullName,
  }, process.env.ACCESS_TOKEN,
{
    expiresIn: ACCESS_TOKEN_EXPAIRY
})
};

userSchema.methods.isRefreshToken = async function () {
     return  jwt.sign({
    _id: this._id,
    email: this.email,
    fullName: this.fullName,
  }, process.env.REFRESH_TOKEN,
{
    expiresIn:REFRESH_TOKEN_EXPAIRY
})
};

export const user = mongoose.model("user", userSchema);
