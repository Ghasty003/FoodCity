import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Get request");
});


router.post("/");


export default router;