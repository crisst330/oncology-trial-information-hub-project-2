import express from "express";
import MyDB from "../db/myMongoDB.js";

const router = express.Router();

// router.get("/trials", (req, res) => {
//     console.log("🏥 Recieved request for /api/trials");
//     res.send("Testing code from the backend server (express), not the frontend.");
// });

router.get("/trials", async (req, res) => {
    console.log("🏥 Recieved request for /api/trials");

    try {
        const trials = await MyDB.getTrials();
        res.json({
          trials,
        });
    } catch (error) {
        console.error("Error fetching clinical data:", error);
        res.status(500).json({ error: "Internal Server Error", trials: [] });
    }
});

export default router;