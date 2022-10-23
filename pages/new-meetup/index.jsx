//our-domain.com/new-meetup

import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetUpPage = () => {

    const addMeetupHandler = (enteredMeetupdata) => {
        console.log(enteredMeetupdata);
    }

    return (
        <>
            <NewMeetUpForm onAddMeetup={addMeetupHandler} />
        </>

    )
}

export default NewMeetUpPage;
