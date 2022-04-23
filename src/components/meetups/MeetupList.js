import MeetupItem from "./MeetupItem";
import styles from './MeetupList.module.css'
function MeetupList(props) {
  return <ul className={ styles.list }>
    { props.meetups.map((meetup) => {
      return <MeetupItem
        key={ meetup.id }
        id={ meetup.id }
        title={ meetup.title }
        description={ meetup.description }
        address={ meetup.address }
        image={ meetup.image }
      />
    }) }
  </ul>
}
export default MeetupList;