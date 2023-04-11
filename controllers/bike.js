var bike = require('../models/bike');

// List of all bikes
// exports.bike_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Bike list');
// };

// List of all bikes
exports.bike_list = async function(req,res){
    try{
        theBikes = await bike.find();
        res.send(theBikes);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific bike.
exports.bike_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike detail: ' + req.params.id);
};

// Handle Bike create on POST.
exports.bike_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike create POST');
};

// Handle Bike delete form on DELETE.
exports.bike_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike delete DELETE ' + req.params.id);
};

// Handle Bike update form on PUT.
exports.bike_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike update PUT' + req.params.id);
};