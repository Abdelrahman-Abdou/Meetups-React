import FavouritesContext from "../store/Favourites-Context";
import { useContext } from 'react'
import MeetupList from "../components/meetups/MeetupList";
function FavouriteMeetups() {
  const userFavouritesCxt = useContext(FavouritesContext)
  const favouriteMeetups = userFavouritesCxt.favourites
  let content = <h1>There are no favourites</h1>
  return <section>
    <h1>My Favourites</h1>
    { favouriteMeetups.length > 0 ?
      <MeetupList meetups={ favouriteMeetups
      } /> : content }
  </section>

}
export default FavouriteMeetups;
