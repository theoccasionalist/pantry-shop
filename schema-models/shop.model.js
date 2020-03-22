const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let shopSchema = new Schema ({
    shop: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'types'
        }]
    }
})

module.exports = mongoose.model('shops', shopSchema, 'shop');