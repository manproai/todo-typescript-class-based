"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressDefaultSettings = void 0;
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
dotenv_1.default.config();
class ExpressDefaultSettings {
    constructor(app) {
        // Extended: https://swagger.io/specification/#infoObject
        this.swaggerOptions = {
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
        this.swaggerDocs = (0, swagger_jsdoc_1.default)(this.swaggerOptions);
        this.defaultEnvironment = () => {
            return this.router;
        };
        this.router = (0, express_1.Router)({ mergeParams: true });
        this.router.use('/static', express_1.default.static('public'));
        this.router.use(express_1.default.urlencoded({ extended: true }));
        this.router.use(express_1.default.json());
        this.router.use((0, morgan_1.default)('tiny'));
        this.router.use("/", routes_1.default);
        this.router.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.swaggerDocs));
        this.router.use((0, cors_1.default)());
        app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.swaggerDocs));
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
}
exports.ExpressDefaultSettings = ExpressDefaultSettings;
