"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("./todo"));
const router = (0, express_1.Router)();
/**
* @swagger
* /todo:
*  get:
*      description: Used to get view.ejs
*      responses:
*         '200':
*            decription: A successful response
*/
router.use('/todo', todo_1.default);
exports.default = router;
