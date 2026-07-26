const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://sabreenjahangir02_db_user:YOUR_NEW_PASSWORD@smartcart.vlk0ikr.mongodb.net/?retryWrites=true&w=majority&appName=SmartCart";

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas successfully!");
    await client.close();
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error(error);
  }
}

testConnection();