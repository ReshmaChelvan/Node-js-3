const Express = require("express");
const app = Express();
const Env = require("dotenv").config({ path: "./config.env" });
const PORT = process.env.Node_Port || 3000;
const Connect = require("./Database/ConnectDatabase");
const Student = require("./Routes/Student");
const Staff = require("./Routes/Mentor");

//MiddleWare For app
app.use(Express.json());

app.use("/Api", Student);

app.use("/Api", Staff);

//MongoConnect
const ConnectFunction = Connect;

//Express Connect
app.listen(PORT, () => {
  console.log("Connected");
});
