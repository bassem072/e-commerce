import { faker } from "@faker-js/faker";
import db from "../models/index.js";
import bcrypt from "bcrypt";

const Role = db.role;
const User = db.user;

const run = async () => {
  Role.findOne({
    name: "user",
  })
    .then((role) => {
      let i = 10;
      while (i-- > 0) {
        let sex = faker.person.sexType();
        let user = new User({
          first_name: faker.person.firstName(sex),
          last_name: faker.person.lastName("male"),
          email: faker.internet.email(),
          password: bcrypt.hashSync("bassem2751959@", 8),
          gender: sex,
          birthday: faker.date.birthdate(),
          roles: role._id,
        });
        user
          .save()
          .then((user) => console.log("User Added: ", user))
          .catch((error) => console.log("User Error: ", error));
      }
    })
    .catch((error) => console.log("Role Error: ", error));
};

export default run;
