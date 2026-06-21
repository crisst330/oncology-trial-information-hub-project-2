// MongoDB collection file for clinical trials
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
  // This function supports: (1) Search by condition, (2) search by phase, (3) search by location, (4) search by status, and (5) browse (blank search),
  // which satisfies the proposed search feature search flow: User submits form -> GET /api/trials?condition=... -> trials.js route -> myMongoDB.getTrials ->
  // Mongo 'find()' -> JSON -> Render cards, which already teaches client/server, routes, repo, query filtering, and rendering.
  me.getTrials = async ({ query = {}, pageSize = 50, page = 0 } = {}) => {
    const { client, trials } = await connect();
    try {
      // Returns a cursor
      const data = await trials
        .find(query)
        .limit(pageSize)
        .skip(page * pageSize)
        .toArray();
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
