import express from "express";
import toDate from "./date.js";
import { itemList, workList, addItemToList } from "./list.js";

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

app.get("/work", (req, res) => {
  const currentWorkList = [...workList];
  res.render("list", {
    fromServer: "Work List",
    newListItems: currentWorkList,
  });
});

app.post("/", (req, res) => {
  const { newItem, newTitle } = req.body;
  if (newTitle === "Work") {
    addItemToList(newItem, newTitle);
    res.redirect("/work");
  } else {
    addItemToList(newItem, newTitle);
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  const { newItem } = req.body;
  addItemToList(newItem, "Work");
  res.redirect("/work");
});

app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});
