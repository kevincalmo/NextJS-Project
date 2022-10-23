import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

const HomePage = () => {
    const DUMMY_MEET_UP = [
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://picsum.photos/200/300',
            address: 'Some address',
            description: 'This is a first meetup'
        },
        {
            id: 'm2',
            title: 'A second meetup',
            image: 'https://picsum.photos/200/300',
            address: 'Some address',
            description: 'This is a second meetup'
        },
        {
            id: 'm3',
            title: 'A thirdmeetup',
            image: 'https://picsum.photos/200/300',
            address: 'Some address',
            description: 'This is a third meetup'
        },
    ];
    return (
        <>
        <MeetupList meetups={DUMMY_MEET_UP} />
        </>
    )
}

export default HomePage;