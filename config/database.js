const monggose = require("mongoose");

const { MONGODB_URI } = process.env;

exports.connect = () => {
  //connection to the database
  monggose
    .connect(MONGODB_URI, {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection to MongoDB Success"))
    .catch((err) => {
      console.log("Error DB Connection");
      console.error(err);
    });
};
