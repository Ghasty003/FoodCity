"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routers/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.db_uri = process.env.DB_URI;
    }
    test() {
        this.app.get("/test", (req, res) => res.status(200).json("Hello world"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("connected to db & server started on port", this.port);
        });
    }
    useMiddleWares() {
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use((0, cors_1.default)());
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.app.use("/api/users", userRoutes_1.default);
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect("mongodb://0.0.0.0:27017/foodcity");
                this.listen();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const server = new Server();
server.test();
server.useMiddleWares();
server.connectToDB();
