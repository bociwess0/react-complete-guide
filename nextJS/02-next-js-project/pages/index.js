import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

        
function HomePage(props) {
  return <MeetupList meetups={props.meetups} /> 
}

//this runs for every incoming request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
        props: {
          meetups: DUMMY_MEETUPS
        }
      }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1 ,
//     // Revalidate means that this page, with revalidate set to 10, would be regenerated on the server
//     // at least every 10 seconds if there are requests coming in for this page. And then these regenerated pages
//     // would replace the old pre-generated pages.
//   }
// }

export default HomePage;