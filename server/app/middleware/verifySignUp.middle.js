import db from "../models/index.js";

const User = db.user;

export const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;
  await User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(409).json({ message: "email_exist" });
      }
      next();
    })
    .catch((err) => {
      return res.status(500).json({ error: "server_error" });
    });
};
