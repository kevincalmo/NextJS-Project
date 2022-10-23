import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupId = (props) => {
    const meetupData = props.meetupData
    return (
        <MeetupDetail
            img={meetupData.img}
            title={meetupData.title}
            address={meetupData.address}
            description={meetupData.description}
        />
    )
}
// function obligatoire avec getStaticProps dans une page dynamique
export async function getStaticPaths() {
    return {
        //indique à next que le paramètre 
        //dois correspondre au valeur de paths.params.meetupId
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    // récupère le paramètre
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    //fetch data for single meetup
    return {
        props: {
            meetupData: {
                img: 'https://picsum.photos/200/300',
                title: 'A first meetUp',
                address: 'Somme street 5, some city',
                description: 'The meetup description'
            }
        }
    }
}

export default MeetupId;
