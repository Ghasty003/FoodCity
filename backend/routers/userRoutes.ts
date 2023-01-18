import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Get request");
});

router.post("/", (req, res) => {
    res.json("Post request")
});


export default router;