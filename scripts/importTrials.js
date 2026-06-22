import fs from "fs";
import { MongoClient } from "mongodb";
import process from "process";

const URI = process.env.MONGODB_URI;
const DB_NAME = "clinicalTrials";
const COLLECTION_NAME = "trials";

async function importTrials() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db(DB_NAME);
    const trials = db.collection(COLLECTION_NAME);

    const data = JSON.parse(
      fs.readFileSync("./frontend/data/trials.json", "utf8"),
    );

    await trials.deleteMany({});
    await trials.insertMany(data);

    console.log(`Imported ${data.length} trial records`);
  } catch (error) {
    console.error("Import failed:", error);
  } finally {
    await client.close();
  }
}

importTrials();