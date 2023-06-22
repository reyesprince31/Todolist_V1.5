let itemList = ["Buy Food", "Cook Food"];

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

function addItemToList(newListItem) {
  if (newListItem) {
    itemList.push(newListItem);
  }
}

export { toDate, itemList, addItemToList };
