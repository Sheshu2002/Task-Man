const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskroutes = require("./routes/taskRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin:
      "https://task-man-backserver.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://task-man-chotu.vercel.app'); // Replace with your frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
  next();
});

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self' https://vercel.live");
  next();
});


//app.use("/api", taskroutes);

app.get("/", (req, res) => {
  res.send({ message: "API is running" });
});

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("---# Successfully Connected to Mongodb Atlas #---");
  })
  .catch((err) => {
    console.log(
      "---# Error while connecting to Mongodb Atlas #---",
      err.message
    );
  });

module.exports = app;
