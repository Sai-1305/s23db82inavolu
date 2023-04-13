var Bike = require('../models/bike');

// List of all Bikes
// exports.bike_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Bike list');
// };

// List of all Bikes
exports.bike_list = async function(req,res){
    try{
        theBikes = await Bike.find();
        res.send(theBikes);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Bike.
exports.bike_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike detail: ' + req.params.id);
};

// Handle Bike create on POST.
// exports.bike_create_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Bike create POST');
// };

// Handle Bike create on POST.
exports.bike_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bike();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.model = req.body.model;
    document.engine_capacity = req.body.engine_capacity;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Bike delete form on DELETE.
exports.bike_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike delete DELETE ' + req.params.id);
};

// Handle Bike update form on PUT.
exports.bike_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.bike_view_all_Page = async function(req, res) {
    try{
        theBikes = await Bike.find();
        res.render('bike', { title: 'Bike Search Results', bikes: theBikes });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};