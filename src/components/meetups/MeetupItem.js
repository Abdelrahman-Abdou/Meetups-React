import styles from './MeetupItem.module.css'
import Card from '../Ui/Card';
import FavouritesContext from '../../store/Favourites-Context';
import { useContext } from 'react'
function MeetupItem(props) {
  const favouritesCxt = useContext(FavouritesContext)

  const isFavourite = favouritesCxt.itemIsFavourite(props.id)
  function toggleFavourite() {
    if (isFavourite) {
      favouritesCxt.removeFavourite(props.id)
    } else {
      favouritesCxt.addFavourite({
        id: props.id,
        adress: props.adress,
        description: props.description,
        image: props.image,
        title: props.title
      })
    }

  }
  return <li key={ props.id } className={ styles.item }>
    <Card>
      <div className={ styles.image }>
        <img src={ props.image } alt={ props.title } />
      </div>
      <div className={ styles.content }>
        <h3>{ props.title }</h3>
        <address>{ props.adress }</address>
        <p>{ props.description }</p>
      </div>
      <div className={ styles.actions }>
        <button onClick={ toggleFavourite }>{ isFavourite ? 'Remove From Favourites' : 'To Favourites' }</button>

      </div>
    </Card>
  </li>
}
export default MeetupItem;