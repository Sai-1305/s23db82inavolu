var express = require('express');
const bike_controlers= require('../controllers/bike');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bike', { title: 'Search Results Bike' });
// });

/* GET bikes */
router.get('/', bike_controlers.bike_view_all_Page );
module.exports = router;
