const User = require("../Models/userMode");
const jwt = require("jsonwebtoken");

const isAdminUser = async (req, res, next) => {
  // middleware to check whether user is admin or not
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const user = await User.findById(decoded._id);

    if (!user || !user.permissions.includes("Admin")) {
      return res
        .status(401)
        .json({ error: "you don't have permission : Admin" });
    } else {
      next();
    }
  } catch (error) {
    console.error({ error: error });
    return res.status(500).json({ error: error.message });
  }
};

const isStudentUser = async (req, res, next) => {
  // middleware to check whether user is student or not
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const user = await User.findById(decoded._id);

    if (!user || !user.permissions.includes("Student")) {
      return res
        .status(401)
        .json({ error: "you don't have permission : Student" });
    } else {
      next();
    }
  } catch (error) {
    console.error({ error: error });
    return res.status(500).json({ error: error.message });
  }
};

const isAcademician = async (req, res, next) => {
  // middleware to check whether user is academician or not
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const user = await User.findById(decoded._id);

    if (!user || !user.permissions.includes("Academician")) {
      return res
        .status(401)
        .json({ error: "you don't have permission : Academician" });
    } else {
      next();
    }
  } catch (error) {
    console.error({ error: error });
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { isAdminUser, isStudentUser, isAcademician };
