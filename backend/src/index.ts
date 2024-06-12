import express, { Express } from "express";
import { config } from "dotenv";
import cors from "cors";
import mongodbConnection from "./config/mongodbConnection";

import catsRoute from "./routes/catsRoute";

config();
mongodbConnection(process.env.MONGODB_URI);

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", catsRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
