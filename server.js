require("dotenv").config();
const express = require("express");
const monggose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const url = `${process.env.URL_HOST}`;

//SETUP mongoose
monggose
  .connect(process.env.MONGODB_URI, {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connection to MongoDB Success"))
  .catch((err) => console.log("Error DB Connection"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Application is listening at ${url}`);
});
