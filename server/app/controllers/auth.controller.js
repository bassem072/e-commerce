import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import authConfig from "../config/auth.config.js";
import db from "../models/index.js";
import {
  createRefreshToken,
  verifyExpirationRefreshToken,
} from "../services/refreshToken.service.js";
import { expireDate } from "../helpers/expireDate.helper.js";

const { user: User, role: Role, refreshToken: RefreshToken } = db;

export const register = (req, res) => {
  const { first_name, last_name, email, password, gender, birthday, isOwner } =
    req.body;
  const user = new User({
    first_name,
    last_name,
    email,
    password: bcrypt.hashSync(password, 8),
    gender,
    birthday,
  });

  Role.findOne({ name: isOwner ? "owner" : "user" })
    .then((role) => {
      if (!role) {
        return res.status(404).json({ message: "role_not_found" });
      }
      user.role = role;
      user
        .save()
        .then(async (newUser) => {
          const accessToken = jwt.sign({ id: newUser._id }, authConfig.secret, {
            expiresIn: authConfig.jwtExpiration,
          });

          const refreshToken = createRefreshToken(newUser._id, remember);

          return res.status(200).json({
            user: {
              id: newUser._id,
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              email: newUser.email,
              gender: newUser.gender,
              birthday: newUser.birthday,
              role: newUser.role,
            },
            accessToken,
            refreshToken,
            message: "register_successfully",
          });
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ message: "user_not_saved", error: err });
        });
    })
    .catch((err) => {
      return res.status(400).json({ message: "role_error", error: err });
    });
};

export const login = (req, res) => {
  const { email, password, remember = false } = req.body;

  User.findOne({ email: email })
    .populate("role", "-__v")
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "user_not_found" });
      }

      if (!user.password) {
        return res.status(404).send({ message: "didn't_have_password" });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "invalid_password" });
      }

      const accessToken = jwt.sign({ id: user._id }, authConfig.secret, {
        expiresIn: authConfig.jwtExpiration,
      });

      const refreshToken = createRefreshToken(user._id, remember);

      return res.status(200).json({
        user: {
          id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          gender: user.gender,
          birthday: user.birthday,
          role: user.role,
        },
        accessToken,
        refreshToken,
        message: "login_successfully",
      });
    })
    .catch((err) => {
      return res
        .status(err.status)
        .json({ message: "server_error", error: err });
    });
};

export const logout = (req, res) => {
  const { refreshToken: requestToken } = req.body;
  RefreshToken.findOneAndDelete({ token: requestToken })
    .exec()
    .then((token) => {
      return res
        .status(200)
        .json({ message: "refresh_token_deleted_successfully" });
    })
    .catch((err) => {
      return res.status(404).json({ message: "refresh_token_not_found" });
    });
};

export const refreshAccessToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;
  RefreshToken.findOne({ token: requestToken })
    .then((refreshToken) => {
      if (!verifyExpirationRefreshToken(refreshToken)) {
        RefreshToken.findByIdAndDelete(refreshToken._id)
          .exec()
          .then((_) => {
            return res.status(400).json({ message: "Refresh_token_expired" });
          })
          .catch((_) => {
            return res.status(400).json({ message: "Refresh_token_expired" });
          });
      }

      const expiryDate = expireDate(refreshToken.remember);

      refreshToken.expiryDate = expiryDate;

      const accessToken = jwt.sign({ id: newUser._id }, authConfig.secret, {
        expiresIn: authConfig.jwtExpiration,
      });

      refreshToken
        .save()
        .then((newRefreshToken) => {
          return res.status(200).json({
            accessToken: accessToken,
            refreshToken: newRefreshToken.token,
          });
        })
        .catch(() => {
          return res.status(200).json({
            accessToken: accessToken,
            refreshToken: refreshToken.token,
          });
        });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ message: "refresh_token_not_found", error: err });
    });
};
