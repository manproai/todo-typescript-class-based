"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServer = void 0;
const express_1 = __importDefault(require("express"));
const app_1 = require("../app");
class HttpServer {
    constructor({ config }) {
        this.start = () => {
            return Promise.resolve()
                .then(() => {
                this.app.listen(this.port, () => {
                    console.log(`http server has started on port ${this.port}`);
                });
            });
        };
        this.start1 = () => new Promise((resolve, reject) => this.app.listen(this.port, () => {
            console.log(`new http server has started on port ${this.port}`);
            resolve();
        }));
        this.port = config.application.http.port;
        this.app = (0, express_1.default)();
        new app_1.ExpressDefaultSettings(this.app);
    }
}
exports.HttpServer = HttpServer;
