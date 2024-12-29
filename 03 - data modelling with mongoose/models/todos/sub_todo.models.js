import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        typeof: String,
        required: true,
    },
    complete:{
        typeof: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
