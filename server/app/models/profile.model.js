import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  mobile_number: {
    type: String,
    validate: {
      validator: function (value) {
        return /\d{11}/.test(value);
      },
      message: (props) => `${props.value} is not a valid mobile number`,
    },
    required: true,
    unique: true,
  },
  address: [
    {
      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
      address_ar: {
        type: String,
        require: true,
      },
      address_en: {
        type: String,
        require: true,
      },
    },
  ],
});

const Profile = mongoose.model("Profile", schema);

export default Profile;
