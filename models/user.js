const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  birthdayPersonName: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

  //   userEmail: {
  //     type: String,
  //     trim: true,
  //     required: true,
  //   },

  //   password: {
  //     type: String,
  //     required: true,
  //     minlength: 7,
  //     maxlength: 60,
  //     trim: true,
  //   },

  //   birthday_person: [
  //     {
  //       name: {
  //         type: String,
  //         required: true,
  //       },
  //       createdAt: {
  //         type: Date,
  //         default: new Date(),
  //       },
  //     },
  //   ],
});

const user = mongoose.model("user", userSchema);

module.exports = user;
