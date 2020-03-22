const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let pointsMappingSchema = new Schema ({
    pointsMapping: [{
        minSize: Number,
        maxSize: Number,
        points: Number
    }]
})

module.exports = mongoose.model('points_mappings', pointsMappingSchema);