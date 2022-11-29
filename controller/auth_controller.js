const { validationResult } = require("express-validator");
const authUseCase = require("../usecases/auth_usecase");
const apiResponse = require("../utils/apiResponse");

const AuthController = () => {
  //TODO: register
  const apiRegisterAccount = async (req, res) => {
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      res.json(
        apiResponse().error("Input error", 422, { errors: errors.array() })
      );
      return;
    }
    //handling request body
    const { username, password, email, fullname } = req.body;
    const payload = { username, password, email, fullname };

    //sent to usecase
    const result = await authUseCase.registerUC(payload);
    //handling response from usecase
    if (result.error) {
      res.json(apiResponse.error({ ...result }));
      return;
    }
    res.json(apiResponse().success("Register succeed", 200, result));
  };
  //TODO: login
  const apiLoginAccount = async (req, res) => {};

  return {
    apiRegisterAccount,
    apiLoginAccount,
  };
};

module.exports = AuthController();
