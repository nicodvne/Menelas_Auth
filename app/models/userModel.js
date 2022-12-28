import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// pre hook - hash mdp before insert in base
UserSchema.pre('save', async function (next) {
    const user = this
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash

    next()
})


// Method to check given password to saved password

UserSchema.methods.isValidPassword = async function (password) {
    const user = this

    const isValid = await bcrypt.compare(password, user.password);

    return isValid;
}


const UserModel = mongoose.model('users', UserSchema)

export default UserModel
