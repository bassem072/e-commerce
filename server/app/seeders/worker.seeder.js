import { faker } from "@faker-js/faker";
import db from "../models";

const Role = db.role;
const User = db.user;

const run = async () => {
  Role.findOne({
    name: "worker",
  })
    .then((role) => {
      let i = 10;
      while (i-- > 0) {
        let sex = faker.person.sexType();
        let worker = new User({
          first_name: faker.person.firstName(sex),
          last_name: faker.person.lastName("male"),
          email: faker.internet.email(),
          password: bcrypt.hashSync("bassem2751959@", 8),
          gender: sex,
          birthday: faker.date.birthdate(),
          roles: role._id,
        });
        worker
          .save()
          .then((worker) => console.log("worker Added: ", worker))
          .catch((error) => console.log("worker Error: ", error));
      }
    })
    .catch((error) => console.log("Role Error: ", error));
};

export default run;