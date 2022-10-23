// /api/new-meetup
import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data);
        const client = await MongoClient.connect('mongodb+srv://user:u4MYuV6t3x8F9q5@cluster0.t2bhv8j.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data)
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default handler;