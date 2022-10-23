import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupId = () => {
    return (
        <MeetupDetail
        img={'https://picsum.photos/200/300'}
        title={'A first meetup'}
        address={'Somme street 5, some city'}
        description={'The meetup description'}
        />
    )
}

export default MeetupId;
