import mongoose from 'mongoose'
import { DatabaseInterface } from '../interfaces/db.interface'
import { MongoDriverOptions } from './options';

export default class MongoDriver implements DatabaseInterface {
    private url: string;
    constructor({config}) {
        const options: MongoDriverOptions = config.mongodb;
    // ('mongodb://username:password@host:port/database?options...')
    //mongodb+srv://brown:<password>@todoapp.bka7vmm.mongodb.net/?retryWrites=true&w=majority

        if (options.auth) {
            this.url = `mongodb+srv://${options.user}:${options.password}@${options.domain}/?retryWrites=true&w=majority`
        } else {
            console.log('Unauthorized user');
        }
    }

    connect = async (): Promise<void>  => {
        try {
            console.log('Mongodb Url: ');
            console.log(this.url);
            await mongoose.connect(this.url);
            console.log('Connected to mongoDB');
        } 
        catch(e) {
            throw new Error(e);
        }
    }
}