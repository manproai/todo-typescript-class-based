import { ConfigurationOptions } from "./configurationOptions";

export const config: ConfigurationOptions = {
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
}
