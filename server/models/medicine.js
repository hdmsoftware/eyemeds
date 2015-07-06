var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedicineSchema = new Schema({

    brand: {type: String},
    generic: {type: String},
    image: { data: Buffer, contentType: String },
    startDay: {type: String},
    endDay: {type: String},
    timesPerDay: {type: Number}

});

var Medicine = mongoose.model('Medicine', MedicineSchema);

exports.MedicineSchema = MedicineSchema;