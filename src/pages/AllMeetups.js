import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react'
// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetupsData, setLoadedMeetupsData] = useState([])
  useEffect(() => {
    fetch(
      'https://react-getting-started-202e7-default-rtdb.firebaseio.com/Meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetupsData(meetups)
      })
  }, [])

  if (isLoading) {
    return <section>
      <div>Loading...</div>
    </section>
  }
  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={ loadedMeetupsData } />

  </section>





}
export default AllMeetups;
