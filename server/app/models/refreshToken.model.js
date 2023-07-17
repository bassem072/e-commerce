import mongoose from "mongoose";

const schema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expiryDate: Date,
  remember: {
    type: Boolean,
    default: false,
  },
});

const RefreshToken = mongoose.model("RefreshToken", schema);

export default RefreshToken;