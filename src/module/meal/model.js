const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = Schema({
    date: {type: String, default: ""},
    product: {type: String, default: ""},
    weight: {type: Number, default: 0},
}, { toJSON: { virtuals: true } });

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
