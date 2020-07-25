import * as mongoose from 'mongoose';

var professionalRoleValidos = {
    values: ['DOCTOR', 'NURSER', 'ADMINISTRATIVE'],
    message: '{VALUE} ROLE professional invalid'
}
var professionalSchema = new mongoose.Schema({
    nColegiado: { type: String, require: [true, 'Number is required'] },
    professionalType: { type: String, enum: professionalRoleValidos }
})


module.exports = mongoose.model('Professional', professionalSchema);