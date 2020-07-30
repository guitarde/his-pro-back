import * as mongoose from 'mongoose';
import *  as  bcrypt from 'bcrypt';

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} role invalid'
}

export const userLoginSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true},
    password: String,
}, { collection: 'user-login' });


userLoginSchema.methods.checkPassword = async (password) => {
    let user = this;
    return await bcrypt.compare(password, user.password);
}


//module.exports = mongoose.model('userLoginSchema', userLoginSchema);