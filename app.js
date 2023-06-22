import express from "express";
import { toDate, itemList, addItemToList } from "./list.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const formattedDate = toDate();
  const currentItemList = [...itemList]; // Create a copy of the itemList
  res.render("list", {
    fromServer: formattedDate,
    newListItems: currentItemList,
  });
});

app.post("/", (req, res) => {
  const { newItem } = req.body;
  addItemToList(newItem);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});
