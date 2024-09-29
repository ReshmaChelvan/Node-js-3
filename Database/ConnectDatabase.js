const MongoDb = require("mongoose");

exports.Connect = (async () => {
  try {
    const Connection = await MongoDb.connect(process.env.Node_Database);
    console.log("Connected Success");
  } catch (error) {
    console.log(error);
  }
})();
