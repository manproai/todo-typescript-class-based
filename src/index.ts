import MongoDriver from "./mongo/driver";
import { HttpServer } from "./app/server";

import { Application } from "./app/application";
import { config } from "./config/index";

const application = new Application({mongoDB: new MongoDriver({ config }), httpServer: new HttpServer({ config }) });
application
    .start()
    .then(()=> {console.log("Application has started")})
    .catch((error) => {console.log(error); })
