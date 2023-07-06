import express from "express";
import { Item, defaultItems } from "./item-schema.js";
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
      if (foundItems.length === 0){
          Item.insertMany(defaultItems)
          .then(()=> {
              console.log('Successfully saved default items');
          })
          .catch((err)=> {
            console.log(err);
          });
          res.redirect("/");
      } else {
        res.render("list", {
          fromServer: 'formattedDate',
          newListItems: foundItems,
        });
      }
    });
  });

app.post("/", (req, res) => {
  const { newItem } = req.body;

  const itemName = new Item({
    name: newItem
  });

  itemName.save().then(() => {
    console.log("succesfully added!");
  });
  res.redirect("/");
});

// app.get("/", (req, res) => {
//   const formattedDate = toDate();
//   const currentItemList = [...itemList]; // Create a copy of the itemList
//   res.render("list", {
//     fromServer: formattedDate,
//     newListItems: currentItemList,
//   });
// });

// app.get("/work", (req, res) => {
//   const currentWorkList = [...workList];
//   res.render("list", {
//     fromServer: "Work List",
//     newListItems: currentWorkList,
//   });
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

// app.post("/work", (req, res) => {
//   const { newItem } = req.body;
//   addItemToList(newItem, "Work");
//   res.redirect("/work");
// });

app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});
