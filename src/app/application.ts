import MongoDriver from "../mongo/driver";
import { HttpServer } from "./server";

export class Application {
    private mongodb: MongoDriver;
    private httpServer: HttpServer;

    constructor({mongoDB, httpServer}) {
        this.mongodb = mongoDB;
        this.httpServer = httpServer
    }

    start = async () => {
        await this.mongodb.connect();
        await this.httpServer.start1();
    }

    
}