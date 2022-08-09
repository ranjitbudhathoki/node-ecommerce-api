const User = require("./../models/user.models");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = signToken(user._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
  next();
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  //if email and password is not provided
  if (!email || !password) {
    return next(new AppError("Please provide email and passwod", 400));
  }
  //if the use exists
  const user = await User.findOne({ email }).select("+password");
  console.log(user);
  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError("Either email or password is incorrect", 401));
  }

  //if everything is okay
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};

module.exports = {
  signup,
  login,
};
