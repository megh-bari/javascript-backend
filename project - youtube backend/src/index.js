// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
dotenv.config({path: './env'});

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8001;
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });

    app.on("error", (error) => {
      console.error("Application error occurred:", error);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed!!", error);
    process.exit(1); 
  });

















/* first approach to connect DB
import mongoose from "mongoose";
import { DB_NAME } from "./constants";


import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("error");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listing on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();


*/
