import express, { Express } from "express";
import { ExpressDefaultSettings } from "../app";
export class HttpServer {
    private port: number;
    private app: Express;

    constructor({ config }) {
        this.port = config.application.http.port;
        this.app = express();
        new ExpressDefaultSettings(this.app);
    }

    start = () => {
        return Promise.resolve()
            .then(() => {
                this.app.listen(this.port, () => {
                    console.log(`http server has started on port ${this.port}`);

                })
            }
            )
    }


    start1 = () => new Promise<void>((resolve, reject) => this.app.listen(this.port, () => {
        console.log(`new http server has started on port ${this.port}`); resolve();
    }));

}