import { MongoDriverOptions } from "../mongo/options"


type HttpType = {
    http: {
        port: number
    }

}
export type ConfigurationOptions = {
    mongodb: MongoDriverOptions;
    application: HttpType;
}