import mongoose from "mongoose";

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  })
);

module.exports = Role;
