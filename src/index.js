// require('dotenv').config({path : './env'}); Sahi hai but code ki consistiency to kharab karega
import dotenv from "dotenv";  // -r dotenv/config --experimental-json-modules in package.json scripts

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './env'
});


connectDB();
















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