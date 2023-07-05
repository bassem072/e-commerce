import governorate from '../data/governorate.json';
import cities from '../data/cities.json';
import db from "../models";

const Governorate = db.governorate;
const City = db.city;

const run = async () => {
  governorate.map(gov => {
    let govern = new Governorate({
      name_en: gov.governorate_name_en,
      name_ar: gov.governorate_name_ar,
    });
    govern
      .save()
      .then((res) => {
        cities.filter(c => c.governorate_id === gov.id).map(c => {
          let city = new City({
            name_en: c.city_name_en,
            name_ar: c.city_name_ar,
            governorate: res._id,
          });
          city
            .save()
            .then((result) => console.log("City Added: ", result))
            .catch((error) => console.log("Governorate Error: ", error));
        });
      })
      .catch((error) => console.log("Governorate Error: ", error));
  })
};

export default run;
