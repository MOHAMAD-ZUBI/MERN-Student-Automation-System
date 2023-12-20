const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/Senior")
  .then(() => {
    app.listen(3060, () => {
      console.log("server is on 3060");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  return res.json("Hi");
});
