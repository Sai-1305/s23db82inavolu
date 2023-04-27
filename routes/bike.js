var express = require('express');
const bike_controlers= require('../controllers/bike');
// var bike_controller = require('../controllers/bike'); //added for part 4
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    console.log()
    res.redirect("/login");
}

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bike', { title: 'Search Results Bike' });
// });

/* GET bikes */
router.get('/', bike_controlers.bike_view_all_Page );

/* GET detail bike page */ //added for part 4
router.get('/detail', bike_controlers.bike_view_one_Page);

/* GET create bike page */
router.get('/create', secured,bike_controlers.bike_create_Page);

/* GET update bike page */
router.get('/update',secured, bike_controlers.bike_update_Page);

/* GET delete bike page */
router.get('/delete',secured, bike_controlers.bike_delete_Page);

module.exports = router;
