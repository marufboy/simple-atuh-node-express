const apiResponse = require("../apiResponse");
const authService = require("../services/authService");
const AuthMiddleware = () => {
  const validateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
      res.json(apiResponse.error("Unauthenticated", 401));
    }

    const bearer = token.split(" ")[1];
    try {
      const decoded = authService.verifyToken(bearer);
      if (decoded.error) {
        res.json(apiResponse.error("Token is not valid", 401));
        return;
      }

      req.user = decoded;
      next();
    } catch (error) {
      res.json(apiResponse.error("Token is not valid", 401));
      return;
    }
  };

  return {
    validateUser,
  };
};

module.exports = AuthMiddleware();
