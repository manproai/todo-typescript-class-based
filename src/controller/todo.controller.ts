import { Request, Response } from "express";
import { TodoRepository } from "./repository/todoRepo";
import { TodoCreate } from "./useCases/todoCreateUseCase";

export class CreateTodo {
    private useCase: TodoCreate;
    constructor() {
        this.useCase = new TodoCreate({
            todoRepository: new TodoRepository()
        });
    }

    actImpl = async (req: Request, res: Response) => {

        await this.useCase.act(req.body)
        res.redirect('/todo')
    }
}

export class GetTodo {
    async actImpl(req: Request, res: Response) {
        res.render('todo.ejs')
    }
}

export class DeleteTodo {
    async actImpl(req: Request, res: Response) {
        res.render('todo.ejs')
    }
}