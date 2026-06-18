import { MongoClient } from "mongodb";
import process from "process";

function MyMongoDB({
  dbName = "clinicalTrials",
  collectionName = "trials",
  defaultURI = "mongodb://localhost:27017",
} = {}) {
  const me = {};
  const URI = process.env.MONGODB_URI || defaultURI;

  const connect = async () => {
    console.log("Connecting to MongoDB at", URI);
    const client = new MongoClient(URI);
    await client.connect();
    const trials = client.db(dbName).collection(collectionName);

    return { client, trials };
  };

  // MQL (MongoQueryLanguage syntax) for querying values
  // For workflow, (1) on every query, connect to the database, (2) run a query, & then (3) close the query (connection to the DB instance/session)
  me.getTrials = async ({query = {}, pageSize = 20, page = 0} = {}) => {
    const { client, trials } = await connect();
    try {
        // Returns a cursor 
        const data = await trials.find(query).limit(pageSize).skip(page * pageSize).toArray();
        console.log("🏥 Fetched trials collection data from MongoDB", data);
        return data;
    } catch (err) {
        console.error("Error fetching trials collection from MongoDB", err);
        throw err;
    } finally {
        await client.close();
    }
  };

  return me;
}

const myMongoDB = MyMongoDB(); 
export default myMongoDB;
