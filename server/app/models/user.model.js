import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  birthday: {
    type: Date,
    required: true,
  },
  profile_image: {
    type: String,
    default: "user.png",
  },
  register_date: {
    type: Date,
    default: new Date(),
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  wishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const User = mongoose.model("User", schema);

export default User;
