import mongoose, { Schema } from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemSchema = new Schema({
    name: String
});

const Item = mongoose.model('Item', itemSchema);

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

export { Item, defaultItems };