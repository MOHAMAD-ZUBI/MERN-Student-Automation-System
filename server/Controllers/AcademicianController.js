const User = require("../Models/userMode");
const Academician = require("../Models/academician");
const jwt = require("jsonwebtoken");

const createAcademician = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    user.permissions.pull("Student");
    user.permissions.push("Academician");
    await user.save();
    const { employmentHistory, officeNo, officeHours, graduatedUni, position } =
      req.body;

    const academician = await Academician.create({
      employmentHistory,
      officeNo,
      officeHours,
      graduatedUni,
      position,
      user: user._id,
    });
    return res.status(200).json({ data: academician, user });
  } catch (error) {
    return res.status(401).json({ error: error.msg });
  }
};

const getCurrentAcademician = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-_id");

    if (!user) {
      return res.status(401).json({ msg: "No such user" });
    }

    const academician = await Academician.findOne({ user: decoded._id });

    if (!academician) {
      return res.status(401).json({ msg: "No such academician" });
    }

    return res.status(200).json({ data: academician, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
};

module.exports = { createAcademician, getCurrentAcademician };
