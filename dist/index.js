"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = __importDefault(require("./mongo/driver"));
const server_1 = require("./app/server");
const application_1 = require("./app/application");
const index_1 = require("./config/index");
const application = new application_1.Application({ mongoDB: new driver_1.default({ config: index_1.config }), httpServer: new server_1.HttpServer({ config: index_1.config }) });
application
    .start()
    .then(() => { console.log("Application has started"); })
    .catch((error) => { console.log(error); });
