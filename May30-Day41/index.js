const express = require('express');
const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://30-05:vachan23@cluster0.m0wm5nl.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbname = 'test';
const app = express();

const connectMongoDB = async() => {
    try {
        await client.connect();
        console.log('Connection established with Atlas');

        const db = client.db(dbname);
        const col = db.collection('people');

        let personDocument = {
            "name": { "first": "Alan1", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
            "contribs": [ "Turing machine", "Turing test", "Turingery" ],
            "views": 1250000
        }

        const p = await col.insertOne(personDocument);
        const myDoc = await col.findOne();

        console.log(myDoc);


    }catch(err) {
        console.log(err);
    }
}

connectMongoDB();

app.listen(8000, () => {
    console.log("Server is started in port 8000");
})