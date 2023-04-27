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

/*
// for a specific Bike.
exports.bike_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike detail: ' + req.params.id);
};
*/

// for a specific Bike.
exports.bike_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Bike.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

/*
// Handle Bike delete form on DELETE.
exports.bike_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike delete DELETE ' + req.params.id);
};
*/

// Handle Bike delete form on DELETE.
exports.bike_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Bike.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

/*
// Handle Bike update form on PUT.
exports.bike_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Bike update PUT' + req.params.id);
};
*/

// Handle Bike update form on PUT.
exports.bike_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Bike.findById(req.params.id)
        // Do updates of properties
        if(req.body.brand)
        toUpdate.brand = req.body.brand;
        if(req.body.model) 
        toUpdate.model = req.body.model;
        if(req.body.engine_capacity) 
        toUpdate.engine_capacity = req.body.engine_capacity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.bike_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Bike.findById( req.query.id)
        res.render('bikedetail',
        { title: 'Bike Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a bike.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bike_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('bikecreate', { title: 'Bike Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a bike.
// query provides the id
exports.bike_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Bike.findById(req.query.id)
        res.render('bikeupdate', { title: 'Bike Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.bike_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Bike.findById(req.query.id)
        res.render('bikedelete', { title: 'Bike Delete', toShow:
        result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};