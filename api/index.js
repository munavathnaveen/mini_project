const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const connectDB = require("./dbConnection/dbConnection");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cors({ credentials: true, origin: "https://farm2industry.vercel.app/" }));
connectDB();
app.use(express.json());
app.use(cookieParser());
const port=process.env.PORT || 8000
app.listen(port,()=>console.log(`app running or port ${port}`));
app.use(router);
