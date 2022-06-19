import TodoTask from "../../models/TodoTask";

export class TodoRepository {
    async create(dataSource) {
        const record = await TodoTask.create(dataSource);
        return record;
    }
    async delete(todoId: string) {
        const task = await TodoTask.findByIdAndDelete(todoId);
        return task;
    }
    async update(id: string, dataSource) {
        return TodoTask.findByIdAndUpdate(id, dataSource, { new: true })
    }
    async findTask(dataSource) {
        const record = await TodoTask.findById(dataSource);
        return record;
    }
    async findAll() {
        return TodoTask.find()
    }

}