const Mongoose = require("mongoose");
const Validator = require("validator");

const MentorSchema = new Mongoose.Schema({
  MentorName: {
    type: String,
    required: [true, "Enter The Student Name"],
  },
  Email: {
    type: String,
    required: ["true", "Please Enter The Email Address"],
  },
  Password: {
    type: String,
    required: [true, "Please Enter The Password"],
  },
  UserName: {
    type: String,
    required: [true, "Enter The UserName"],
  },
});

//Check if The Student Have The Same Mentor if Not True If Yes Then false
MentorSchema.methods.CheckTheStudent = function (Mentor, Student) {
  if (Mentor.MentorName === Student.MentorName) {
    return true;
  } else {
    return false;
  }
};

const MentorModel = Mongoose.model("Mentor", MentorSchema);
module.exports = MentorModel;
