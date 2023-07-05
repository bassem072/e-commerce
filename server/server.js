import express from "express";
import "./app/config/dotenv.config.js";
import bodyParser from "body-parser";
import cors from "cors";
import configDB from "./app/config/db.config.js";
import setupDB from './app/services/setup_db.service.js';
import db from './app/models';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
