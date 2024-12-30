import mongoose from "mongoose"; // import mongooses

const userSchema = new mongoose.Schema(
  {
    // data field
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: [8, "password must be at least 8 character"],
    },
  },
  {
    timestamps: true,
  }
); // created schema

export const User = mongoose.model("User", userSchema); // export User
