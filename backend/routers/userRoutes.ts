import express from "express";
import { signupUser } from "../controllers/userController";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Get request");
});


router.post("/signup", signupUser);


export default router;