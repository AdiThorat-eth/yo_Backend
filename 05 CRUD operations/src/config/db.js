const mongoose = require("mongoose");

// here database connection is established
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
