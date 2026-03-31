// it is used to start server
require("dotenv").config();

const express = require("express");

const app = require("./src/app");

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
