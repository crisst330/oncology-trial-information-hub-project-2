import express from 'express';
import process from 'process';
import trialsRouter from "./routes/trials.js";
import notesRoutes from "./routes/notes.js";
const PORT = process.env.PORT || 3000;

const myapp = express();

myapp.use(express.static("frontend"));
myapp.use(express.json());

myapp.use("/api/", trialsRouter);
myapp.use("/api/", notesRoutes);

myapp.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});