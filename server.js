require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
const PORT = process.env.PORT;
const url = `${process.env.URL_HOST}`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Application is listening at ${url}`);
});
