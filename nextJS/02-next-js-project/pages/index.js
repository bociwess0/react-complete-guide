import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

//this runs for every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//         props: {
//           meetups: DUMMY_MEETUPS
//         }
//       }
// }

export async function getStaticProps() {

  const client = await MongoClient.connect(
    'mongodb+srv://nikola:shSdpGtx1sHqjDBT@cluster0.ptcltxn.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1 ,
    // Revalidate means that this page, with revalidate set to 10, would be regenerated on the server
    // at least every 10 seconds if there are requests coming in for this page. And then these regenerated pages
    // would replace the old pre-generated pages.
  }
}

export default HomePage;