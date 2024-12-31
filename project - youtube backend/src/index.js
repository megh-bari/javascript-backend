// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ path: "./env" });

connectDB();


















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
