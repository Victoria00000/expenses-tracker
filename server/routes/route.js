const routes = require('express').Router();
const controller = require('../controller/controller');

// ROUTE CATEGORIES .GET + CONTROLLER // 1:32:03
routes.route('/api/categories').get(controller.create_categories);


module.exports = routes; 