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

router.get("/notes/:id", async (req, res) => {
  console.log(
    `Received request for note with id ${req.params.id} at /api/notes/${req.params.id}`,
  );
  try {
    const note = await MyNotesDB.getNoteById(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
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

router.put("/notes/:id", async (req, res) => {
  console.log(
    `Received request to update note with id ${req.params.id} at /api/notes/${req.params.id}`,
  );
  try {
    const result = await MyNotesDB.updateNote(req.params.id, req.body);
    res.json({ result });
  } catch (err) {
    console.error("Error updating note", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/notes/:id", async (req, res) => {
  console.log(
    `Received request to delete note with id ${req.params.id} at /api/notes/${req.params.id}`,
  );
  try {
    const result = await MyNotesDB.deleteNote(req.params.id);
    res.json({ result });
  } catch (err) {
    console.error("Error deleting note", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
