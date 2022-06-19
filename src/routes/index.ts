import { Router } from "express";
import todoRouter from "./todo";
import swagger

const router = Router();

 /**
 * @swagger
 * /todo:
 *  get:
 *      description: Used to get view.ejs
 *      responses: 
 *         '200':
 *            decription: A successful response 
*/

router.use('/todo', todoRouter)

export default router;