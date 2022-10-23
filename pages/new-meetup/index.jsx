//our-domain.com/new-meetup

import { useRouter } from 'next/router'
import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetUpPage = () => {

    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupdata) => {
        const response = await fetch('/api/new-meetup', {
            /* Je fais une requete en POST */
            method: 'POST',
            /* Converti mon objet en json */
            body: JSON.stringify(enteredMeetupdata),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }

    return (
        <>
            <NewMeetUpForm onAddMeetup={addMeetupHandler} />
        </>

    )
}

export default NewMeetUpPage;
