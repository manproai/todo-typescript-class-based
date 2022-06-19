import { Schema, model } from "mongoose";
import { TodoInterface } from "../interfaces/todo.interface";

const TodoSchema = new Schema<TodoInterface>({
    title: {
        type: String,
        required: true
    },
    description: String,
    isDone: {
        type: Boolean,
        default: false
    }

})

export default model<TodoInterface>('TodoTask', TodoSchema);
