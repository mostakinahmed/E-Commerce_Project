const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
const dotenv = require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//store variable to env file
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

    const db = client.db("e-commerce");
    const sliderCollection = db.collection("sliders");
    const productCollection = db.collection("products");

    //databse sliders management
    app.get("/api/sliders", async (req, res) => {
      const result = await sliderCollection.find().toArray();
      res.send(result);
    });

    // All product management
    app.get("/api/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    //Latest product management
    app.get("/api/latestproducts", async (req, res) => {
      const productCount = await productCollection.countDocuments();
      let skip = 0;
      if (productCount > 10) {
        skip = productCount - 10;
      }
      const result = await productCollection.find().skip(skip).toArray();
      res.send(result);
    });

    //listen management added
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } finally {
  }
}
run().catch(console.dir);
