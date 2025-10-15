import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config();
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MONGODB Connection Failed !!!", err);
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
