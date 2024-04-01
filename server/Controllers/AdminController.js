const User = require("../Models/userMode");
const Admin = require("../Models/admin");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    const admin = await Admin.create({
      user: user._id,
    });
    return res.status(200).json({ data: admin, user });
  } catch (error) {
    return res.status(401).json({ error: error.msg });
  }
};

const getAdmin = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-_id");

    if (!user) {
      return res.status(401).json({ msg: "No such user" });
    }

    const admin = await Admin.findOne({ user: decoded._id });

    if (!admin) {
      return res.status(401).json({ msg: "No such admin" });
    }

    return res.status(200).json({ data: admin, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

module.exports = { getAdmin, createAdmin };
