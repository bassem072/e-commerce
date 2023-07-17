import db from "../models/index.js";
import bcrypt from "bcrypt";

const Role = db.role;
const User = db.user;

const run = async () => {
  console.log("hi");
  Role.findOne({
    name: "super_admin",
  })
    .then((role) => {
      const super_admin = new User({
        first_name: "Bassem",
        last_name: "Elsayed",
        email: "bassemelsayd072@gmail.com",
        password: bcrypt.hashSync("bassem2751959@", 8),
        gender: "male",
        birthday: new Date("1997-05-22"),
        role: role._id,
      });
      console.log(super_admin);
      super_admin
        .save()
        .then((super_admin) => console.log("Super Admin Added: ", super_admin))
        .catch((error) => console.log("Super Admin Error: ", error));
    })
    .catch((error) => console.log("Role Error: ", error));
};

export default run;
