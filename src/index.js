import express from "express";
import { config } from "dotenv";
import dotenv from "dotenv"
import connectDB from "./db/db.js"

const app = express()
dotenv.config()

connectDB()


 app.on("error", () => {
     console.log("ERROR: ", error);
     throw error;
 });

 app.listen(process.env.PORT, () => {
     console.log(`app is running on port ${process.env.PORT}`);
 });




/*
const app = express();
config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR", error);
        throw error;
    }
};
connectDB()
*/
// ; (async () => {})()
