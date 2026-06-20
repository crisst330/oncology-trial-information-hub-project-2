import express from "express";
import MyNotesDB from "../db/myNotesDB.js";

const router = express.Router();

router.get("/notes", async (req, res) => {
    console.log("Received request for /api/notes");
    try {
        const notes = await MyNotesDB.getNotes();
        res.json(notes);
    } catch (err) {
        console.error("Error fetching notes", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/notes", async (req, res) => {
    console.log("Received request to create a new note at /api/notes");
    try {
        const result = await MyNotesDB.createNote(req.body);
        res.json({ result });
    } catch (err) {
        console.error("Error creating note", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;