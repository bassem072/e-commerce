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

const Country = mongoose.model("Country", schema);

export default Country;
