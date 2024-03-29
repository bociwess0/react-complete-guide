import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//here we describes all the dynamic values
export async function getStaticPaths() {
    return {
        fallback: false,
        // If you set fall back to false, you say that your paths
        // contains all supported meetup ID values. That means that if the user enters anything
        // that's not supported here, for example, M3 he or she would see a 404 error.
        paths: [
            {
                params: {
                    meetupId : 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: 'm1',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        title : 'A First Meetup',
        address : 'Some address 5, 12345 Some City',
        description : 'This is a first meetup!'
      }
    }
    
  }
}

export default MeetupDetails;