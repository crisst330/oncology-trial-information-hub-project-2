import { MongoClient } from "mongodb";
import process from "process";

function MyNotesDB({
  dbName = "clinicalTrials",
  collectionName = "researchNotes",
  defaultURI = "mongodb://localhost:27017",
} = {}) {
  const me = {};
  const URI = process.env.MONGODB_URI || defaultURI;

  const connect = async () => {
    console.log("Connecting to MongoDB at", URI);
    const client = new MongoClient(URI);
    await client.connect();
    const notes = client.db(dbName).collection(collectionName);

    return { client, notes };
  }; 

    me.getNotes = async ({query = {}, pageSize = 20, page = 0} = {}) => {
    const { client, notes } = await connect();
    try {
        const data = await notes.find(query).limit(pageSize).skip(page * pageSize).toArray();
        console.log("Fetched research notes collection data from MongoDB", data);
        return data;
    } catch (err) {
        console.error("Error fetching research notes collection from MongoDB", err);
        throw err;
    } finally {
        await client.close();
    }
  };
  
  me.createNote = async ({title, notes: noteText, interestLevel} = {}) => {
    const { client, notes } = await connect();
    try {
      const result = await notes.insertOne({ title, notes: noteText, interestLevel });
      console.log("Created new research note in MongoDB", result);
      return result;
    } catch (err) {
      console.error("Error creating research note in MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  return me;
}

const myNotesDB = MyNotesDB(); 
export default myNotesDB;