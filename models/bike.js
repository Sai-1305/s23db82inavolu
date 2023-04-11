const mongoose = require("mongoose")
const bikeSchema = mongoose.Schema({
    brand: String,
    model: String,
    engine_capacity: Number
})
module.exports = mongoose.model("bike",bikeSchema)