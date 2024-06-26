const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const Roles = {
  Admin: "Admin",
  Manager: "Manager",
  Academician: "Academician",
  Student: "Student",
};

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    registerNo: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      min: 9,
    },
    permissions: {
      type: [String],
      default: ["Student"],
    },
    avatarPath: {
      type: String,
      default: "null",
    },
  },
  { timestamps: true }
);

// static signUp method

userSchema.statics.signup = async function (
  email,
  password,
  registerNo,
  firstName,
  lastName,
  phone,
  sex
) {
  // validation
  if (!email || !password) {
    throw Error("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minNumbers: 0,
      minSymbols: 0,
      minLowercase: 0,
      minUppercase: 0,
    })
  ) {
    throw Error("Password not strong enough");
  }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    firstName,
    lastName,
    phone,
    registerNo,
    sex,
  });

  return user;
};

// static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
module.exports.Roles = Roles;
