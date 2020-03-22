import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
const { MONGO_URI } = config;

const app = express();
// routes
import signupRoutes from "./routes/api/signup";
import authRoutes from "./routes/api/auth";

// Cors Middlewares
app.use(cors({ origin: true, credentials: true }));

// Morgan Middlewares
app.use(morgan("dev"));

// BodyParser middlewares
app.use(express.json());

// DB config

const db = `${MONGO_URI}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connecting Success!!"))
  .catch(err => console.log(err));

// Use routes
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/api/signup", signupRoutes);
app.use("/api/auth", authRoutes);

export default app;
