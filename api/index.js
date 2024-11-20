const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const connectDB = require("./dbConnection/dbConnection");
const cookieParser = require("cookie-parser");
const app = express();

// Update CORS to allow the frontend domain
app.use(cors({ 
  credentials: true, 
  origin: "https://farm2industry.vercel.app" // Make sure this matches your frontend's URL
}));

connectDB();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App running on port ${port}`));

app.use(router);
