import express from "express";
import MyDB from "../db/myMongoDB.js";

const router = express.Router();

// Test route previously used to confirm backend connection.
// Keeping it commented out in case we need to test the route again later.
// router.get("/trials", (req, res) => {
//   console.log("🏥 Received request for /api/trials");
//   res.send("Testing code from the backend server (express), not the frontend.");
// });

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
    const trials = await MyDB.getTrials({
      query,
      pageSize: 50,
      page: 0,
    });

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
