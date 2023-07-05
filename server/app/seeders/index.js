import roles from "./roles.seeder.js";
import super_admin from "./super_admin.seeder.js";
import admin from './admin.seeder.js';
import moderator from "./moderator.seeder.js";
import owner from "./owner.seeder.js";
import worker from "./worker.seeder.js";
import user from "./user.seeder.js";
import governorate_and_city from "./governorate_and_city.seeder.js";

const seeder = {
    roles,
    super_admin,
    admin,
    moderator,
    owner,
    worker,
    user,
    governorate_and_city,
}

export default seeder;