import { TodoInterface } from "../../interfaces/todo.interface";
import { TodoRepository } from "../repository/todoRepo";
import { TodoUseCase } from "../UseCase"

export class TodoCreate implements TodoUseCase<TodoInterface, any> {
    private todoRepository: TodoRepository;

    constructor({ todoRepository }) {
        this.todoRepository = todoRepository;
    }

    async act(dataSource: TodoInterface): Promise<any> {
        try {
            let task = await this.todoRepository.create(dataSource)
            console.log(task);
        } catch (e) {
            console.log(e);

        }
    }
}