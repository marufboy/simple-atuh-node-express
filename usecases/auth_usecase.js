const authService = require("../utils/services/authService");
const AuthUseCase = () => {
  const registerUC = async (payload) => {
    //handling password to hash password
    const hashedPassword = authService.encryptPassword(payload.password);
    const newUser = {
      ...payload,
      password: hashedPassword,
    };
    //TODO: handling to repositories to store data
  };
  const loginUC = async (payload) => {
    //TODO: handling repo to handle username or email login
  };

  return {
    registerUC,
    loginUC,
  };
};

module.exports = AuthUseCase();
