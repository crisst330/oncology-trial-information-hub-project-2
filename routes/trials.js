import express from "express";
import MyDB from "../db/myMongoDB.js";

const router = express.Router();

// GET route for retrieving clinical trial records from MongoDB.
router.get("/trials", async (req, res) => {
  console.log("🏥 Received request for /api/trials");

  try {
    // Creates an empty query object.
    // If no filters are selected, MongoDB will return all trial records.
    const query = {};

    // If the frontend sends a condition filter, add it to the query.
    if (req.query.condition) {
      query.condition = req.query.condition;
    }

    // If the frontend sends a phase filter, add it to the query.
    if (req.query.phase) {
      query.phase = req.query.phase;
    }

    // If the frontend sends a status filter, add it to the query.
    if (req.query.status) {
      query.status = req.query.status;
    }

    // If the frontend sends a location filter, add it to the query.
    if (req.query.location) {
      query.location = req.query.location;
    }

    // Calls the MongoDB helper file and passes in the query object.
    const page = Math.max(parseInt(req.query.page, 10) || 0, 0);
    const pageSize = Math.min(Math.max(parseInt(req.query.pageSize, 10) || 50, 1), 100);

    const trials = await MyDB.getTrials({ query, page, pageSize });

    // Sends the data back to the frontend as JSON, with pagination info.
    res.json({ trials, page, pageSize });

    // Sends the data back to the frontend as JSON.
    res.json({
      trials,
    });
  } catch (error) {
    console.error("Error fetching clinical data:", error);

    res.status(500).json({
      error: "Internal Server Error",
      trials: [],
    });
  }
});

export default router;
