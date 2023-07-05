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
  governorate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Governorate",
  },
});

const City = mongoose.model("City", schema);

export default City;
