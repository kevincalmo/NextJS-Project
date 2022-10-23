import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

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

const HomePage = (props) => {

    return (
        <>
            {props.meetups && <MeetupList meetups={props.meetups} />}

        </>
    )
}

/* Exécution pour chaque demande dont chaque rechargement de page */
/* export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    //fetch data from a API
    return {
        props: {
            meetups: DUMMY_MEET_UP
        }
    }
} */

/* Exécution au moment de la commande ' yarn run buil ou npm run build ' */
export async function getStaticProps() {
    // Send a http request and fetch data
    return {
        props: {
            meetups: DUMMY_MEET_UP
        },
        // Nombre de seconde pour que la page soit mis à jour au niveau du backend
        revalidate: 10
    }
}

export default HomePage;