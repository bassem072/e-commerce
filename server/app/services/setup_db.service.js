import seeder from "../seeders/index.js";
import db from "../models/index.js";

const Role = db.role;

const setup = async () => {
  const count = await Role.estimatedDocumentCount();
  if (count === 0) {
    seeder.roles();
    seeder.super_admin();
    seeder.admin();
    seeder.moderator();
    seeder.owner();
    seeder.worker();
    seeder.user();
    seeder.governorate_and_city();
  }
};

export default setup;
