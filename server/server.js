import express from "express";
import mongoose from 'mongoose';
import "./app/config/dotenv.config.js";
import bodyParser from "body-parser";
import cors from "cors";
import dbConfig from "./app/config/db.config.js";
import setupDB from './app/services/setup_db.service.js';
import db from './app/models/index.js';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await setupDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch(err => {
  console.log(err);
  process.exit();
});