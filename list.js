let itemList = ["Buy Food", "Cook Food"];
let workList = [];

function toDate() {
  const date = new Date();
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const today = date.toLocaleDateString("en-US", option);

  return today;
}

function addItemToList(newListItem, whatTitle) {
  if (newListItem) {
    if (whatTitle === "Work") {
      workList.push(newListItem);
    } else {
      itemList.push(newListItem);
    }
  }
}

export { toDate, itemList, workList, addItemToList };
