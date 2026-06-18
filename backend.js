import express from 'express';
import process from 'process';

const PORT = process.env.PORT || 3000;

const myapp = express();

myapp.use(express.static("frontend"));
// Will be used when we implement our routing to show clinical trial data (JSON) response
// myapp.use("/", mainRoutes); 

myapp.use('/', (req, res) => {
    res.send("Hello from the backend server.");
});

myapp.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});