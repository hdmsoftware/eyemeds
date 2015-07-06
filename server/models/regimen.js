var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Medicine = require('./Medicine').Medicine;

var RegimenSchema = new Schema({

    name: {type: String},
    weeks: [

        {
            medicines: [
                {type: Schema.Types.ObjectId, ref: 'Medicine'}
            ]
        }

    ]



});

var Regimen = mongoose.model('Regimen', RegimenSchema);

exports.RegimenSchema = RegimenSchema;