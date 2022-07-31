const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Or const mongoose = require('mongoose').Schema; //

// categories => field => ['type', 'color']; //
const categories_model = new Schema({
    type: { type: String, default: 'Investment' },
    color: { type: String, default: 'grey' },
});
const Categories = mongoose.model('categories', categories_model);

// transactions => field => ['name', 'type', 'amount', 'date']; //
const transactions_model = new Schema({
    name: { type: String, default: 'unspecified' },
    type: { type: String, default: 'Investment' },
    amount: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
});
const Transactions = mongoose.model('transactions', transactions_model);

//exports//
exports.default = Transactions;
module.exports = {
    Categories,
    Transactions,
};