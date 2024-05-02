const express = require("express");
const {
  register,
  getUsers,
  login,
  deleteUser,
  addRole,
  deleteRole,
  getCurrentUser,
} = require("../Controllers/AuthController");

const { isAdminUser } = require("../Middlewares/Roles");

const router = express.Router();

// getUsers
router.get("/", isAdminUser, getUsers);
router.get("/current", getCurrentUser);
// register
router.post("/register", register);

// login
router.post("/login", login);

// deleteUser

router.get("/delete/:id", isAdminUser, deleteUser);

// update Role
router.patch("/addRole/:id", isAdminUser, addRole);

router.patch("/deleteRole/:id", isAdminUser, deleteRole);

module.exports = router;
