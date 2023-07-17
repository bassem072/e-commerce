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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const SubCategory = mongoose.model("SubCategory", schema);

export default SubCategory;