import mongoose, { Schema } from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemsSchema = new Schema({
    name: String
});

const Item = mongoose.model('Item', itemsSchema);

const buyFood = new Item({
    name: 'Buy Food'
});
const cookFood = new Item({
    name: 'Cook Food'
});
const eatFood = new Item({
    name: 'Eat Food'
});

const defaultItems = [buyFood, cookFood, eatFood];

const listSchema = new Schema({
    name: String,
    items: [itemsSchema]
}); 

const List = mongoose.model("List", listSchema);


export { Item, List, defaultItems };