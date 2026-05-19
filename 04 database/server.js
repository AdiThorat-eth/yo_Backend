// it is used to start server and connect server to database
require("dotenv").config();

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://adityavijaythorat_db_user:O3AIUw1aZgTCjYY0@cluster0.iaurnpu.mongodb.net/day-4",
    )
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });
}

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// in MongoDB atlas(cloud)
// 1. cluster => combination of storage + processor
// 2. Database => for storing data
