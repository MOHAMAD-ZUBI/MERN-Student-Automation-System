const express = require("express");
const router = express.Router();

const { createAdmin, getAdmin } = require("../Controllers/AdminController");

router.get("/getAdmin", getAdmin);
router.post("/create", createAdmin);

module.exports = router;
