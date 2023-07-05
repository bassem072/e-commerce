import db from "../models";

const Role = db.role;

const roles = ["super_admin", "admin", "moderator", "owner", "worker", "user"];

const createRole = async (roleName) => {
  try {
    const role = await Role({ name: roleName }).save();
    console.log(`Role ${role.name} created.`);
  } catch (error) {
    console.log("error:", error);
  }
};

const run = () => {
  roles.map(async item => await createRole(item));
};

export default run;