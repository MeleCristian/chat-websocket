import express from "express";
import handlbars from "express-handlebars";
import path from "path";

import { __dirname } from "./utils.js";
import indexRouter from "./routers/index.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.engine("handlebars", handlbars.engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error no controlado : ${error.message}`;
  error.log(message);
  res.status(500).json({ message });
});
export default app;
