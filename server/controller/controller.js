const model = require("../models/model");

// POST: http://localhost:5000/api/categories //
async function create_categories(req, res) {
    const CategoriesModel = new model.Categories({
        type: "Savings",
        color: "rgb(255, 99, 133)",
    });
    await CategoriesModel.save(err =>
        err ? res.status(400).json({ message: "Error in create_categories: ", err })
            : res.json(CategoriesModel)
    );
};

// GET: http://localhost:5000/api/categories //
async function get_categories(req, res) {
    let data = await model.Categories.find({});
    let filter = await data.map(value => {
        Object.assign({}, { type: value.type, color: value.color });
        return res.json(filter);
    });
};

// POST: http://localhost:5000/api/transactions //
async function create_transaction(req, res) {
    !req.body ?? res.status(404).json({ message: 'Error in crete_transaction' });
    let { name, type, amount } = req.body;
    const TransactionsModel = await new model.Transactions({
        name: name,
        type: type,
        amount: amount,
        date: new Date,
    });
    TransactionsModel.save(err => err ? res.status(400).json({ message: "Error in crete_transaction: ", err })
        : res.json(TransactionsModel));
};

// GET: http://localhost:5000/api/transactions //
async function get_transaction(req, res) {
    let data = await model.Transactions.find({});
    return res.json(data);
};

// DELETE: http://localhost:5000/api/transactions //
async function delete_transaction(req, res) {
    !req.body ?? res.status(404).json({ message: 'Error in delete_transaction' });
    await model.Transactions.deleteOne(req.body, function (err) { if (!err) { res.json("Deleted successfully!") }; })
        .clone().catch(function (err) { res.json("Error while deleting Transaction Record") });
};

// GET: http://localhost:5000/api/labels //
async function get_labels(req, res) {
    module.Transactions.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'type',
                foreignField: 'type',
                as: 'categories_info',
            },
        },
        {
            $unwind: '$categories_info',
        },
    ]).then(result => {
        let data = result.map( v => Object.assign({}, {_id: v._id, name: v._name, type: v._type, amount: v._amount, color: v.categories_info('color')}) );
        return res.json(data);
    }).catch(err => res.status(400).json({ message: "Error in get_labels: ", err }));
};


//exports//
module.exports = {
    create_categories,
    get_categories,
    create_transaction,
    get_transaction,
    delete_transaction,
    get_labels,
};
