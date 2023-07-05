import mongoose from "mongoose";

const schema = mongoose.Schema({
  name_en: {
    type: String,
    required: true,
    unique: true,
  },
  name_ar: {
    type: String,
    required: true,
    unique: true,
  },
});

const Governorate = mongoose.model("Governorate", schema);

export default Governorate;
