var express = require('express');
const bike_controlers= require('../controllers/bike');
// var bike_controller = require('../controllers/bike'); //added for part 4
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bike', { title: 'Search Results Bike' });
// });

/* GET bikes */
router.get('/', bike_controlers.bike_view_all_Page );

/* GET detail bike page */ //added for part 4
router.get('/detail', bike_controlers.bike_view_one_Page);

/* GET create bike page */
router.get('/create', bike_controlers.bike_create_Page);

/* GET create update page */
router.get('/update', bike_controlers.bike_update_Page);

/* GET delete bike page */
router.get('/delete', bike_controlers.bike_delete_Page);

module.exports = router;
