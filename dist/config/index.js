"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    mongodb: {
        auth: true,
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        domain: process.env.MONGODB_DOMAIN
    },
    application: {
        http: {
            port: Number(process.env.APP_HTTP_PORT)
        }
    }
};
