require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const photosRouter = require("./src/api/routes/photo");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const photographersRoutes = require("./src/api/routes/photographers");
const usersRoutes = require("./src/api/routes/user");


const app = express();

connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY ,
    api_secret: process.env.API_SECRET
})

app.use(cors());
app.use(express.json());

app.use("/api/v1/photographers", photographersRoutes)
app.use("/api/v1/photos", photosRouter);
app.use("/api/v1/users", usersRoutes);

app.use("*", (req, res, next) => {
    return res.status(400).json("Route not found");
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000 ✅");
})