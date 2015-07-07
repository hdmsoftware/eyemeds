var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicationSchema = new Schema({

    brand: {type: String},
    generic: {type: String},
    image: { data: Buffer, contentType: String },
    startDay: {type: String},
    endDay: {type: String},
    timesPerDay: {type: Number}

});

var Medication = mongoose.model('Medication', MedicationSchema);

exports.MedicationSchema = MedicationSchema;