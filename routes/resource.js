var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var bike_controller = require('../controllers/bike');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// BIKE ROUTES ///

// POST request for creating a Bike.
router.post('/bikes', bike_controller.bike_create_post);

// DELETE request to delete Bike.
router.delete('/bikes/:id', bike_controller.bike_delete);

// PUT request to update Bike.
router.put('/bikes/:id', bike_controller.bike_update_put);

// GET request for one Bike.
router.get('/bikes/:id', bike_controller.bike_detail);

// GET request for list of all Bike items.
router.get('/bikes', bike_controller.bike_list);

module.exports = router;