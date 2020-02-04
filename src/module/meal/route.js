const express = require('express');
const MealModel = require('./model');
const router = express.Router();

router.use((req, res, next) => { next() });

router.get('/all', (req, res) => {
    console.log('get meals');
    MealModel.find().then(products => {
        res.send(products);
    });
});

router.post('', (req, res) => {
    const mealToCreate = req.body.meal;
    console.log('add meal');

    MealModel.create(mealToCreate).then((createdMeal) => {
        res.send(createdMeal);
    });
})

module.exports = router;
