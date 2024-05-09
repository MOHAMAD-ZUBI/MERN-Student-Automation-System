const passport = require("passport");
const User = require("../Models/User/userMode");
const jwt = require("jsonwebtoken");
const authMiddleware = passport.authenticate("jwt", { session: false });

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { authMiddleware, authenticateUser };
