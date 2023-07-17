import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
  description_en: {
    type: String,
    required: true,
  },
  description_ar: {
    type: String,
    required: true,
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
  },
  sub_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

const Brand = mongoose.model("Brand", schema);

export default Brand;
