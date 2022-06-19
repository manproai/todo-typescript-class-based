import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();

export class ExpressDefaultSettings {
    private router: Router;
    // Extended: https://swagger.io/specification/#infoObject
    private swaggerOptions = {
        swaggerDefinition: {
            info: {
                version: "1.0.0",
                title: "Customer API",
                description: "Customer API Information",
                contact: {
                    name: "Amazing Developer"
                },
                servers: ["http://localhost:3000"]
            }
        },
        // ['.routes/*.js']
        apis: ["app.js"]
    };



    private swaggerDocs = swaggerJsDoc(this.swaggerOptions)

    constructor(app: Express) {
        this.router = Router({ mergeParams: true });
        this.router.use('/static', express.static('public'));
        this.router.use(express.urlencoded({ extended: true }));
        this.router.use(express.json());
        this.router.use(morgan('tiny'));

        this.router.use("/", router);
        this.router.use('/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocs))
        this.router.use(cors());

        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(this.swaggerDocs));

        app.set('view engine', 'ejs');
        app.use(this.router);
        /**
         * @swagger
         * /customers:
         *  get:
         *    description: Use to request all customers
         *    responses:
         *      '200':
         *        description: A successful response
         *      '400':
         *        description: Bad request
         */
        app.get("/customers", (req, res) => {
            res.status(200).send("Customer results");
        });

        
    }

    defaultEnvironment = () => {
        return this.router;
    }
}
