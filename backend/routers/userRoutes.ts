import express from "express";

class Routes {
    private router: express.Router;

    public constructor() {
        this.router = express.Router();
    }

    public routes() {
        this.router.get("/", (req, res) => res.json("Get request"));
        this.router.post("/", (req, res) => res.json("Post request"))
    }
}

export default Routes;