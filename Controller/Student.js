const studentModel = require("../Database/StudentDatabase");

exports.StudentCreate = (Req, Res, Next) => {
  const Student = (async () => {
    try {
      let MongoStudentCreate = await studentModel.create(Req.body);
      Res.status(200).json({
        Status: "Success",
        Message: "User Created Successfull",
      });
    } catch (Error) {
      Res.status(404).json({
        Status: "Failure",
        Message: "Error",
      });
    }
  })();
};
