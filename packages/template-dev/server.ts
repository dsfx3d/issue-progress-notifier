import express from "express";
import dotenv from "dotenv";
import {router} from "./issues/router";

dotenv.config();
const app = express();
app.set("view engine", "ejs");

app.use("/issues", router);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
