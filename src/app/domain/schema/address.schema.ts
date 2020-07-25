import * as mongoose from 'mongoose';
 

export const AddressSchema = new mongoose.Schema({
    street: { type: String },
    number: { type: Number },
    door: { type: String },
    codePostal: { type: Number },
    city: { type: String },
});
