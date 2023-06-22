import express from "express";
import { today } from "./list.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const dateNow = today();
  res.render("list", { dateToday: dateNow });
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
