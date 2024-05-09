const User = require("../Models/User/userMode");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Roles } = require("../Models/User/userMode");
const Admin = require("../Models/User/admin");
const Academician = require("../Models/User/academician");
const Student = require("../Models/User/student");
require("dotenv").config();

///////////////////////////////////////////// AUTH FUNCTIONS /////////////////////////////////////////////

// create JWT

const createToken = (_id, email, roles) => {
  return jwt.sign({ _id, email, roles }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// get all users

const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// register

const register = async (req, res) => {
  const { email, password, registerNo, firstName, lastName, phone, sex } =
    req.body;

  try {
    if (!email.includes("@karabuk.edu.tr")) {
      throw new Error("email should contain @karabuk.edu.tr");
    }
    const user = await User.signup(
      email,
      password,
      registerNo,
      firstName,
      lastName,
      phone,
      sex
    );

    const token = createToken(user._id, user.email, user.permissions);
    await Student.create({ user: user._id });

    res.status(200).json({ email, token, role: user.permissions });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

// login

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id, user.email, user.permissions);

    res.status(200).json({ email, token, role: user.permissions });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete user

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: " no such user " });
    } else {
      const user = await User.findOneAndDelete({ _id: id });
      if (!user) {
        return res.status(400).json({ error: " no such user " });
      }
      res.status(200).json("success");
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const role = decoded.roles;
    let userDetails;
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ msg: "No such user" });
    }

    if (role.includes("Academician")) {
      userDetails = await Academician.findOne({ user: user._id });

      if (!userDetails) {
        return res.status(401).json({ msg: "No such academician" });
      }
    } else {
      userDetails = await Student.findOne({ user: user._id });

      if (!userDetails) {
        return res.status(401).json({ msg: "No such student" });
      }
    }

    return res.status(200).json({ data: userDetails, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

///////////////////////////////////////////// ROLES FUNCTIONS /////////////////////////////////////////////

// Add role to user

const addRole = async (req, res) => {
  const { id } = req.params;
  let data = "";
  try {
    const { permission } = req.body; // admin

    if (!permission) {
      throw new Error("permission field is required");
    }
    if (!(permission in Roles)) {
      throw new Error("Permission field is invalid");
    }
    const checkUser = await User.findById(id);
    if (checkUser.permissions.includes(permission)) {
      throw new Error("Permission already exists");
    }
    const user = await User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId.isValid(id) ? id : null },
      { $push: { permissions: permission } },
      { new: true }
    );
    if (permission === "Admin") {
      data = await Admin.create({
        user: user._id,
      });
    }

    if (permission === "Student") {
      data = await Student.create({
        user: user._id,
      });
    }

    if (permission === "Academician") {
      data = await Academician.create({
        user: user._id,
      });
    }

    if (!user) {
      return res.status(404).json({ error: "No such user" });
    }

    return res.status(200).json({ Data: data, user });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// delete role from a user

const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: " no such user " });
    } else {
      const { permission } = req.body;

      if (!permission) {
        throw Error("permission field is required");
      }

      // check if given role exists in roles dictionary
      if (!Roles[permission]) {
        throw Error("invalid role name");
      }
      const user = await User.findOneAndUpdate(
        { _id: id },
        { $pull: { permissions: permission } },
        { new: true }
      );
      if (!user) {
        return res.status(400).json({ error: " no such user " });
      }
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  register,
  getUsers,
  login,
  deleteUser,
  addRole,
  deleteRole,
  getCurrentUser,
};
