import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./app/config/dotenv.config.js";

const PORT = process.env.PORT || 5000;
const app = express();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
