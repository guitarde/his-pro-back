import * as mongoose from 'mongoose';
import *  as  bcrypt from 'bcrypt';

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} role invalid'
}

export const userLoginSchema = new Schema({

    username: { type: String, requiere: [true, 'Username is required'] },
    email: { type: String, unique: true, requiere: [true, 'Email is required'] },
    password: { type: String, requiere: [true, 'Password is required'] },
    img: { type: String, requiere: false },
    role: { type: String, requiere: false, default: 'USER_ROLE', enum: rolesValidos },
    createAt: { type: Date, default: Date.now }
}, { collection: 'user-login' });


userLoginSchema.methods.checkPassword = async (password) => {
    let user = this;
    return await bcrypt.compare(password, user.password);
}


//module.exports = mongoose.model('userLoginSchema', userLoginSchema);