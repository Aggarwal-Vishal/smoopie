import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routers/user.route.js";
import addRoute from "./routers/user.route.js";

dotenv.config({});

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

//API's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/user", addRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
