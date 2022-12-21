const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
    pet: {
        type: String,
        required: true,
    },
    firstYear: {
        type: Number,
        required: true,
    },
    lastYear: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
        user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    }, {
        timestamps: true
});

    module.exports = mongoose.model('Pet', petSchema);