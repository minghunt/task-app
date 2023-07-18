import mongoose from "mongoose";
import validator from "validator";

const taskSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

export default Task
