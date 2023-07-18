import mongoose from "mongoose";
import validator from "validator";
import brcypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import Task from "./task.js";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        },
    },
    tokens: [{
        token:
        {
            type: String,
            required: true
        }

    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
});
userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'HungAcWy666')

    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.avatar
    delete userObject.tokens
    return userObject
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user)
        throw new Error('Unable to login')
    const isMatch = await brcypt.compare(password, user.password)
    if (!isMatch)
        throw new Error('Unable to login')
    return user;

}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await brcypt.hash(user.password, 8)
    }
    next()
})

userSchema.pre('deleteOne', { query: true }, async function (next) {
    const user = this._conditions
    await Task.deleteMany({ owner: user._id })
    next()
})
const User = mongoose.model('User', userSchema)
export default User