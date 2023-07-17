import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name_en: {
    type: String,
    required: true,
  },
  name_ar: {
    type: String,
    required: true,
  },
});

const Governorate = mongoose.model("Governorate", schema);

export default Governorate;
