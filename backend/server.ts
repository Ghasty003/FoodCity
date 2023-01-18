import express from "express";
import mongoose from "mongoose";
import userRoute from "./routers/userRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

class Server {
    private app: express.Application;
    private port: number | string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    }

    private listen(): void {
        this.app.listen(this.port, () => {
            console.log("connected to db & server started on port", this.port);
        })
    }

    public useMiddleWares():void {
        this.app.use(express.json({limit: "50mb"}));
        this.app.use(cors());
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.app.use("/api/users", userRoute);
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

server.useMiddleWares();
server.connectToDB();