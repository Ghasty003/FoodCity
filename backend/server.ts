import express, { Express } from "express";
import mongoose from "mongoose";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    public listen(): void {
        this.app.listen(4000, () => {
            console.log("connected to db & server started on port 4000");
        })
    }

    public async connectToDB():Promise<void> {
        try {
            await mongoose.connect("mongodb://0.0.0.0:27017/foodcity");
            this.listen();
        } catch (error) {
            console.log(error);
        }
    }
}

const server = new Server();

server.connectToDB();