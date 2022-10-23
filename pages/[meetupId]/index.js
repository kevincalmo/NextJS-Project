import { MongoClient, ObjectId } from 'mongodb';
import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupId = (props) => {
    return (
        <MeetupDetail
            img={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}
// function obligatoire avec getStaticProps dans une page dynamique
export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://user:u4MYuV6t3x8F9q5@cluster0.t2bhv8j.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        //indique à next que le paramètre 
        //dois correspondre au valeur de paths.params.meetupId
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        })),
    };
}

export async function getStaticProps(context) {
    // récupère le paramètre
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://user:u4MYuV6t3x8F9q5@cluster0.t2bhv8j.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
    client.close();
    //fetch data for single meetup
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupId;
