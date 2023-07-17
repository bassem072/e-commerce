import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Role = mongoose.model("Role", schema);

export default Role;
