const { ClientSession } = require("mongodb");
const Mongoose = require("mongoose");
let { isEmail } = require("validator");

const StudentSchema = new Mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Enter The UserName"],
  },
  Name: {
    type: String,
    required: [true, "Enter The Name"],
  },
  Email: {
    type: String,
    required: [true, "Enter The Email Address"],
  },
  Password: {
    type: String,
    required: [true, "Enter The Password"],
  },
  ConfirmPassword: {
    type: String,
  },
  MentorName: {
    type: String,
    default: "undefined",
  },
  PreviousMentor: {
    type: [String],
  },
});

StudentSchema.methods.VerifyTheUser = function (UserDetails) {
  if (UserDetails.MentorName !== "undefined") {
    return true;
  } else {
    return false;
  }
};

const studentModel = Mongoose.model("Student", StudentSchema);
module.exports = studentModel;
