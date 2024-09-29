const MentorModel = require("../Database/MentorDatabase");
const Student = require("../Database/StudentDatabase");

exports.CreateMentor = (Req, Res, Next) => {
  const Mentor = (async () => {
    try {
      const MongoMentorCreate = await MentorModel.create(Req.body);
      Res.status(200).json({
        Status: "Success",
        Message: "Mentor Created Successfull",
      });
    } catch (Error) {
      Res.status(404).json({
        Status: "Failure",
        Message: "Error",
      });
    }
  })();
};

exports.AssignMentor = (Req, Res, Next) => {
  const Assign = (async () => {
    try {
      //Getting The Data From Req Body
      let MentorName = Req.body.MentorName;
      let StudentID = Req.body.StudentID;

      //Getting The Data From Database
      const GetMentor = await MentorModel.findOne({ _id: MentorName });
      const GetStudent = await Student.findOne({ _id: StudentID });

      //Verify The User Has Mentor Or Not This Below Function Return False
      let VerifyFunction = GetStudent.VerifyTheUser(GetStudent);
      if (VerifyFunction === false) {
        //Asigning The Student With A Mentor
        GetStudent.MentorName = GetMentor.MentorName;
        GetStudent.save();
        //Sending Success Response To The Client
        Res.status(201).json({
          Status: "Success",
          Message: "Mentor Successfully Assigned",
        });
      } else {
        //If The Student Have a Mentor Already It Will Send the error Message
        Res.status(200).json({
          Status: "UnAuthorized",
          Message: "Oops Student Already Have Mentor",
        });
      }
    } catch (Error) {
      Res.status(404).json({
        Status: "Failure",
        Message: Error,
      });
    }
  })();
};

exports.ChangeMentor = (Req, Res, Next) => {
  const AsignNewMentor = (async () => {
    try {
      let MentorId = Req.body.Mentor;
      let StudentID = Req.body.Student;
      const MentorDetail = await MentorModel.findById({ _id: MentorId });
      const StudentDetail = await Student.findById({ _id: StudentID });
      const CheckFunction = MentorDetail.CheckTheStudent(
        MentorDetail,
        StudentDetail
      );
      if (CheckFunction === true) {
        Res.status(404).json({
          Status: "Failed",
          Message: "The Student Have Already The Same Mentor",
        });
      } else {
        StudentDetail.PreviousMentor = StudentDetail.MentorName;
        StudentDetail.MentorName = MentorDetail.MentorName;
        StudentDetail.save();
        Res.status(200).json({
          Status: "Success",
          Message: "New Mentor Assigned With The Student",
        });
      }
    } catch (Error) {
      Res.status(404).json({
        Status: "Failure",
        Message: Error,
      });
    }
  })();
};

exports.GetMentor = (Req, Res, Next) => {
  const GetMentor = (async () => {
    try {
      const MentorName = Req.params.id;
      //I Used Projection In Second Argument To Hide Paswword And Confirm Password
      const Result = await Student.find(
        { MentorName: MentorName },
        { Password: 0, ConfirmPassword: 0 }
      );
      if (!Result) {
        Res.status(404).json({
          Status: "Error",
          Message: "User Not Found",
        });
      } else {
        Res.status(200).json({
          Status: "Success",
          Result: Result.length,
          Message: Result,
        });
      }
    } catch (Error) {
      Res.status(404).json({
        Status: "Success",
        Message: Error,
      });
    }
  })();
};
