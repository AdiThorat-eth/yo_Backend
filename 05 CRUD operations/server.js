// it is used to start server and connect server to database

require("dotenv").config();

const app = require("./src/app");
const connectToDb = require("./src/config/db");

app.listen(process.env.PORT, async () => {
  console.log(`server is running on port ${process.env.PORT}`);
  await connectToDb();
});
