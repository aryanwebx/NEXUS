const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://aryanwebx:yadavhai2%40@aryanwebx.a3mry3m.mongodb.net/';
const client = new MongoClient(url);


const dbName = 'coder';

async function main() {
   
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
    

    // const insertResult = await collection.insertOne({ name: "Amarjeet", age: 22, City:"Greater Noida"});
    // console.log('Inserted documents =>', insertResult);

    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);

    // const deleteResult = await collection.deleteMany({ a: 3 });
    // console.log('Deleted documents =>', deleteResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());