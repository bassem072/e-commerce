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
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
});

const City = mongoose.model("City", schema);

export default City;
