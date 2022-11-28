const monggose = require("mongoose");
const schema = monggose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = monggose.model("User", userSchema);
