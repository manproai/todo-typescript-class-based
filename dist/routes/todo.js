"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controller/todo.controller");
const todoRouter = (0, express_1.Router)();
const todoCtrl = new todo_controller_1.CreateTodo();
const getCtrl = new todo_controller_1.GetTodo();
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
exports.default = todoRouter;
