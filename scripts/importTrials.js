import fs from "fs";
import { MongoClient } from "mongodb";
import process from "process";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function importTrials() {
  try {
    await client.connect();

    const db = client.db("clinicalTrials");

    const trials =
      JSON.parse(
        fs.readFileSync(
          "./frontend/data/trials.json",
          "utf8"
        )
      );

    const collection =
      db.collection("trials");

    await collection.deleteMany({});

    await collection.insertMany(trials);

    console.log(
      `Imported ${trials.length} records`
    );
  } finally {
    await client.close();
  }
}

importTrials();