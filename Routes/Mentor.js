const Express = require("express");
const express = Express.Router();
const {
  CreateMentor,
  AssignMentor,
  ChangeMentor,
} = require("../Controller/Mentor");

express.post("/Mentor", CreateMentor);

express.post("/MentoAssign", AssignMentor);

express.patch("/MentoChange", ChangeMentor);

module.exports = express;
