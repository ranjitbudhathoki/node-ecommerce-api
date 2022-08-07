const User = require("./../models/user.models");

const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    result: users.length,
    data: {
      users,
    },
  });
};

const getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).
    json({
      status: "success",
      data:{
        user
      }
    });
};

const createUser = (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined. Plese use /signup instead",
  });
};

const updateUser = (req, res, next) => {
  res.status(203),
    json({
      status: "fail",
      message: "This route is not yet defined",
    });
};

const deleteUser = (req, res, next) => {
  res.status(500),
    json({
      status: "fail",
      message: "This route is not yet defined",
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
