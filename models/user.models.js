const mongoose = require("mongoose");
const validators = require("validators");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    validate: [validators.isEmail, "Invalid email"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, "Password confirmation is required"],
    vaidatte: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
