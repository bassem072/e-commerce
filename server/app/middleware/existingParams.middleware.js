export const checkRequiredParams = (params) => {
  return (req, res, next) => {
    for (const param in params) {
      if (!req.body[params[param]]) {
        res.status(400).json({ message: "param_not_found", param: params[param] });
        return;
      }
    }

    next();
  };
};