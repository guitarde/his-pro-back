
import * as mongoose from 'mongoose';

var insurerTypesValid = {
    values: ['HEALTH', 'FAMILY', 'DENTAL'],
    message: '{VALUE} Type insurer invalid'
}

var insurerSchema = new mongoose.Schema({
    insurerName: String,
    insurerType: insurerTypesValid,
    cardNumber: String
});

module.exports = mongoose.model('Insurer', insurerSchema);