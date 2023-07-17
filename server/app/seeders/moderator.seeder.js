import { faker } from "@faker-js/faker";
import db from "../models/index.js";
import bcrypt from "bcrypt";

const Role = db.role;
const User = db.user;

const run = async () => {
  Role.findOne({
    name: "moderator",
  })
    .then((role) => {
      let i = 10;
      while (i-- > 0) {
        let sex = faker.person.sexType();
        let moderator = new User({
          first_name: faker.person.firstName(sex),
          last_name: faker.person.lastName("male"),
          email: faker.internet.email(),
          password: bcrypt.hashSync("bassem2751959@", 8),
          gender: sex,
          birthday: faker.date.birthdate(),
          role: role._id,
        });
        moderator
          .save()
          .then((moderator) => console.log("Moderator Added: ", moderator))
          .catch((error) => console.log("Moderator Error: ", error));
      }
    })
    .catch((error) => console.log("Role Error: ", error));
};

export default run;
