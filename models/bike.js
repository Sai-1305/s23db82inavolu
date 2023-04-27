const mongoose = require("mongoose")
const bikeSchema = mongoose.Schema({
    brand: {
        type: String,
        minlength:3
    },
    model: {
        type: String,
        minlength:3
    },
    engine_capacity: {
        type: Number,
        min:650,
        max:1350
}})
module.exports = mongoose.model("Bike",bikeSchema)