const model = require('../models/model');

// POST: http://localhost:5000/api/categories //
function create_categories(req, res) {
    const CategoriesModel = new model.Categories({
        type: 'Savings',
        color: 'rgb(255, 99, 132)',
    });
    CategoriesModel.save( err => err ? res.status(400).json({message: 'Error creating categories: ', err}) : res.json(CategoriesModel));
};


module.exports = {
    create_categories,
};