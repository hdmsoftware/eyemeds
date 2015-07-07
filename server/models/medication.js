var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicationSchema = new Schema({

    brand: {
        type: String,
        required: '{PATH} is required!'
    },
    generic: {
        type: String,
        required: '{PATH} is required!'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    startDay: {
        type: String,
        required: '{PATH} is required!'
    },
    endDay: {
        type: String,
        required: '{PATH} is required!'
    },
    timesPerDay: {
        type: Number,
        required: '{PATH} is required!'
    }

});

var Medication = mongoose.model('Medication', MedicationSchema);

exports.Medication = Medication;