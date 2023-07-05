import { faker } from "@faker-js/faker";
import db from "../models";

const Role = db.role;
const User = db.user;

const run = async () => {
  Role.findOne({
    name: "owner",
  })
    .then((role) => {
      let i = 10;
      while (i-- > 0) {
        let sex = faker.person.sexType();
        let owner = new User({
          first_name: faker.person.firstName(sex),
          last_name: faker.person.lastName("male"),
          email: faker.internet.email(),
          password: bcrypt.hashSync("bassem2751959@", 8),
          gender: sex,
          birthday: faker.date.birthdate(),
          roles: role._id,
        });
        owner
          .save()
          .then((owner) => console.log("Owner Added: ", owner))
          .catch((error) => console.log("Owner Error: ", error));
      }
    })
    .catch((error) => console.log("Role Error: ", error));
};

export default run;
