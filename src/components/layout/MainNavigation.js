import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'
import FavouritesContext from '../../store/Favourites-Context';
import { useContext } from 'react'
function MainNavigation() {
  const FavCtx = useContext(FavouritesContext)
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        React Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to='/new-meetups'>
              Add new meetups
            </Link>
          </li>
          <li>
            <Link to='/favourite-meetups'>
              Favourite Meeetups
              <span className={ styles.badge }>{ FavCtx.totalFavourites }</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}
export default MainNavigation;