const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
const dotenv = require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.URI;
console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("The database is connected");

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } finally {
  }
}
run().catch(console.dir);
