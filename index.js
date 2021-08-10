const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const propertyRoute = require("./src/propertyRoute");
app.use("/property", propertyRoute);

mongoose.connect(
  process.env.CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("MongoDB connected")
);

app.listen(5000, () => console.log("Server is running on PORT 5000"));
