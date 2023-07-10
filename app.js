import express from "express";
import { Item, List, defaultItems } from "./item-schema.js";
import _ from "lodash";
// import toDate from "./date.js";
// import { itemList, workList, addItemToList } from "./list.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const finding = Item.find({});

  finding.then((foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems)
        .then(() => {
          console.log("Successfully saved default items");
        })
        .catch((err) => {
          console.log(err);
        });
      res.redirect("/");
    } else {
      res.render("list", {
        fromServer: "Today",
        newListItems: foundItems,
      });
    }
  });
});

app.get("/:customListName", (req, res) => {
  const customListName = _.capitalize(req.params.customListName);

  const findingList = List.findOne({ name: customListName });

  findingList.then((foundList) => {
    if (!foundList) {
      console.log("no match");
      const list = new List({
        name: customListName,
        items: defaultItems,
      });

      list.save().then(() => {
        console.log("New Route Added with default items");
      });
      res.redirect("/" + customListName);
    } else {
      console.log(foundList.name);
      console.log("Found match");
      res.render("list", {
        fromServer: foundList.name,
        newListItems: foundList.items,
      });
    }
  });
});

app.post("/", (req, res) => {
  const { newItem, newTitle } = req.body;

  console.log("sending title: " + newTitle);
  const itemName = new Item({
    name: newItem,
  });

  if (newTitle === "Today") {
    if (newItem){
      itemName.save().then(() => {
        console.log("succesfully added!");
      });
    }
    res.redirect("/");
  } else {
    if (newItem){
      const findingList = List.findOne({ name: newTitle });

      findingList.then((foundList) => {
        foundList.items.push(itemName);
        foundList.save();
      });
    }
    res.redirect("/" + newTitle);
  }
});

app.post("/delete", (req, res) => {
  const { checkBox, listTitle } = req.body;

  if (listTitle === 'Today'){
    Item.findByIdAndRemove({ _id: checkBox }).then(() => {
      console.log("Successfully deleted!");
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate({name: listTitle}, {$pull: {items: { _id: checkBox}}})
    .then(() => {
      console.log("Found and Deleted");
    });
    res.redirect("/" + listTitle);
  }
});

app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});
