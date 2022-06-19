"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    isDone: {
        type: Boolean,
        default: false
    }
});
exports.default = (0, mongoose_1.model)('TodoTask', TodoSchema);
