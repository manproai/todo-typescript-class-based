import { Router } from 'express';
import { CreateTodo, GetTodo } from '../controller/todo.controller';

const todoRouter = Router();
const todoCtrl = new CreateTodo();
const getCtrl = new GetTodo();
//Routes
/**
* @swagger
* /:
*  get:
*      description: Used to get view.ejs
*      responses: 
*         '200':
*            decription: A successful response 
*/


todoRouter.get('/', getCtrl.actImpl);

todoRouter.post('/', todoCtrl.actImpl);

export default todoRouter;