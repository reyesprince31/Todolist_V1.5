let itemList = ["Buy Food", "Cook Food"];
let workList = [];

function addItemToList(newListItem, whatTitle) {
  if (newListItem) {
    if (whatTitle === "Work") {
      workList.push(newListItem);
    } else {
      itemList.push(newListItem);
    }
  }
}

export { itemList, workList, addItemToList };
