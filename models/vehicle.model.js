'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema

var VehicleSchema = new Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);