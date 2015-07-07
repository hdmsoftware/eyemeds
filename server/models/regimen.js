var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Medication = require('./medication').Medication;

var RegimenSchema = new Schema({

    name: {type: String, unique: true, required: true},
    medicines: [
        {type: Schema.Types.ObjectId, ref: 'Medicine'}
    ],
    created_at: {type: Date},
    created_by: {type: String},
    updated_at: {type: Date}

});

var Regimen = mongoose.model('Regimen', RegimenSchema);

exports.RegimenSchema = RegimenSchema;