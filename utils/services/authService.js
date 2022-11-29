const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//env
const { JWT_SECRET } = process.env;
const AuthService = () => {
  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(password, salt);
  };

  const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
  };

  const verifyToken = (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return {
        error: true,
        message: "Token Invalid, Please Request a New One",
      };
    }
  };

  const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: "2h",
    });
  };

  return {
    encryptPassword,
    comparePassword,
    verifyToken,
    generateToken,
  };
};

module.exports = AuthService();
