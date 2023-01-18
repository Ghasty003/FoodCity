import express from "express";
import { signupUser } from "../controllers/userController";

const router = express.Router();

router.post("/login", (req, res) => {
    res.json("Get request");
});


router.post("/signup", signupUser);


export default router;