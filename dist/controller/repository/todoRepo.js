"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const TodoTask_1 = __importDefault(require("../../models/TodoTask"));
class TodoRepository {
    create(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield TodoTask_1.default.create(dataSource);
            return record;
        });
    }
    delete(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield TodoTask_1.default.findByIdAndDelete(todoId);
            return task;
        });
    }
    update(id, dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            return TodoTask_1.default.findByIdAndUpdate(id, dataSource, { new: true });
        });
    }
    findTask(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield TodoTask_1.default.findById(dataSource);
            return record;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return TodoTask_1.default.find();
        });
    }
}
exports.TodoRepository = TodoRepository;
