import { MongoClient, ObjectId } from "mongodb";
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

  me.getNotes = async ({ query = {}, pageSize = 20, page = 0 } = {}) => {
    const { client, notes } = await connect();
    try {
      const data = await notes
        .find(query)
        .limit(pageSize)
        .skip(page * pageSize)
        .toArray();
      console.log("Fetched research notes collection data from MongoDB", data);
      return data;
    } catch (err) {
      console.error(
        "Error fetching research notes collection from MongoDB",
        err,
      );
      throw err;
    } finally {
      await client.close();
    }
  };

  me.getNoteById = async (id) => {
    const { client, notes } = await connect();
    try {
      const note = await notes.findOne({ _id: new ObjectId(id) });
      console.log("Fetched research note by ID from MongoDB", note);
      return note;
    } catch (err) {
      console.error("Error fetching research note by ID from MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  me.getNotesByTitle = async (title) => {
    const { client, notes } = await connect();
    try {
      const data = await notes
        .find({ title: { $regex: title, $options: "i" } })
        .toArray();
      console.log("Fetched research notes by title from MongoDB", data);
      return data;
    } catch (err) {
      console.error("Error fetching research notes by title from MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  me.getNotesByInterestLevel = async (interestLevel) => {
    const { client, notes } = await connect();
    try {
      const data = await notes.find({ interestLevel: interestLevel }).toArray();
      console.log(
        "Fetched research notes by interest level from MongoDB",
        data,
      );
      return data;
    } catch (err) {
      console.error(
        "Error fetching research notes by interest level from MongoDB",
        err,
      );
      throw err;
    } finally {
      await client.close();
    }
  };

  me.getNotesbyNotesText = async (noteText) => {
    const { client, notes } = await connect();
    try {
      const data = await notes
        .find({ notes: { $regex: noteText, $options: "i" } })
        .toArray();
      console.log("Fetched research notes by note text from MongoDB", data);
      return data;
    } catch (err) {
      console.error(
        "Error fetching research notes by note text from MongoDB",
        err,
      );
      throw err;
    } finally {
      await client.close();
    }
  };

  me.createNote = async ({ title, notes: noteText, interestLevel } = {}) => {
    const { client, notes } = await connect();
    try {
      const result = await notes.insertOne({
        title,
        notes: noteText,
        interestLevel,
      });
      console.log("Created new research note in MongoDB", result);
      return result;
    } catch (err) {
      console.error("Error creating research note in MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  me.updateNote = async (
    id,
    { title, notes: noteText, interestLevel } = {},
  ) => {
    const { client, notes } = await connect();
    try {
      const result = await notes.updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, notes: noteText, interestLevel } },
      );
      console.log("Updated research note in MongoDB", result);
      return result;
    } catch (err) {
      console.error("Error updating research note in MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  me.deleteNote = async (id) => {
    const { client, notes } = await connect();
    try {
      const result = await notes.deleteOne({ _id: new ObjectId(id) });
      console.log("Deleted research note from MongoDB", result);
      return result;
    } catch (err) {
      console.error("Error deleting research note from MongoDB", err);
      throw err;
    } finally {
      await client.close();
    }
  };
  return me;
}

const myNotesDB = MyNotesDB();
export default myNotesDB;
