const routes = require('express').Router();
const controller = require('../controller/controller');


// ROUTES + GET/POST/DELETE + CONTROLLER // THESE ARE THE ENDPOINTS: //

// /API/CATEGORIES //
routes.route('/api/categories')
.post(controller.create_categories)
.get(controller.get_categories);

// /API/TRANSACTION //
routes.route('/api/transactions')
.post(controller.create_transaction)
.get(controller.get_transaction)
.delete(controller.delete_transaction);

// /API/LABELS //
routes.route('/api/labels')
.get(controller.get_labels);


//exports//
module.exports = routes; 