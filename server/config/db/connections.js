import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();

const { connect } = mongoose;

const client = new MongoClient(process.env.MONGO_CONNECTIONS_MERN, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const Connections = async () => {
    try {
        await connect(process.env.MONGO_CONNECTIONS_MERN)
        console.log(`Database MongoDB Connected!`)
    } catch(error) {
        throw error
    }
};

// Connections().catch(console.dir);

export default Connections;

/**
 *   try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
 */

/**
 * 
 * try {
        await connect(`mongodb+srv://pasamsul:va-Db9V5g6-hK!p@cluster0.nupjfok.mongodb.net/db_pa_samsul?retryWrites=true&w=majority`)
        console.log(`Database MongoDB Connected!`)
    } catch(error) {
        throw error
    }
 */
