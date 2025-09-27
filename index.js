import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./configs/dbConnect.js";
import course from "./routes/course.js";

dotenv.config();

const PORT = 8000 || process.env.PORT;
const app = express();

// middlewars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
connectDB();

// routes
app.use("/courses", course);


app.use("", (req, res, next) => {
  res.send("hello world!!!!");
});


app.listen(PORT, () => {
  console.log(`Server is runnion on port: ${PORT}`);
});
