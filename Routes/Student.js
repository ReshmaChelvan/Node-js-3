const Express = require("express");
const express = Express.Router();
const { StudentCreate } = require("../Controller/Student");
const { GetMentor } = require("../Controller/Mentor");
const MentorModel = require("../Database/MentorDatabase");
const Student = require("../Database/StudentDatabase");

express.post("/Student", StudentCreate);

express.get("/GetMentor/:id", GetMentor);

module.exports = express;
