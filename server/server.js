const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/index");

const cors = require("cors");

// Middlewares
const { isStudentUser } = require("./Middlewares/Roles");

const app = express();

app.use(cors());

app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/Senior")
  .then(() => {
    app.listen(3060, () => {
      console.log("server is on 3060");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// Routes
app.use("/api", routes);
