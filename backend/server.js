const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ["http://localhost:3000", "https://mern-stack-app.onrender.com"]
}));

app.use("/api/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
