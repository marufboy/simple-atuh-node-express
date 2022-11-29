const ApiResponse = () => {
  const success = (message, statusCode, data = undefined) => {
    return {
      message,
      error: false,
      code: statusCode,
      data,
    };
  };
  const error = (message, statusCode, data = undefined) => {
    const codes = [400, 401, 403, 404, 422];

    const code = codes.find((code) => code === statusCode);

    statusCode = code ? code : 500;
    return {
      message,
      error: true,
      code: statusCode,
      data,
    };
  };

  return { success, error };
};

module.exports = ApiResponse();
