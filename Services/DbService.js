const {MongoClient} = require("mongodb");

const url = "mongodb://root:password@localhost:27017";
const client = new MongoClient(url);

const DbConnection = async (collection) => {
    await client.connect();
    const db = client.db('io-academipsum');
    return db.collection(collection)
}

module.exports = DbConnection;
