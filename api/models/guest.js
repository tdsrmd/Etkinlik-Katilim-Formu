const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create guest schema & model
const GuestSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    department: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    class: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      maximum: 59999999999,
      unique: true,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("guest", GuestSchema);

module.exports = Guest;
