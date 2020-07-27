import * as mongoose from 'mongoose';

var patienSchema = new mongoose.Schema({

    nch: String,
    insurer: { type: mongoose.Schema.Types.Array, ref: 'Insurer' }

});

module.exports = mongoose.model('Patient', patienSchema);