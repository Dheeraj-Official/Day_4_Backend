// require('dotenv').config({path : './env'}); Sahi hai but code ki consistiency to kharab karega
import dotenv from "dotenv"; // -r dotenv/config --experimental-json-modules in package.json scripts

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`App is unable to talk : `, error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection ERROR !! ", err);
  });

// Sahi hai but code ki consistiency to kharab karega
/*
import express from "express"
const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("App is unable to talk : ", error);
            throw error
        });
        app.listen(process.env.MONGODB_URI, () => {
            console.log(`App is listening on port ${process.env.MONGODB_URI}`)
        })
    } catch (error) {
        console.log("ERROR: ",error);
        throw error;
    }
})()
*/
