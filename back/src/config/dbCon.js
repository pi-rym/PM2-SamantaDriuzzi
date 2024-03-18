const mongoose = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
module.exports = dbCon;
