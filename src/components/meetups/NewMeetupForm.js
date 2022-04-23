import styles from './NewMeetupForm.module.css'
import Card from '../Ui/Card'
import { useRef } from 'react'
function NewMeetupForm(props) {
  const TitleInputRef = useRef()
  const imageInputRef = useRef()
  const adressInputRef = useRef()
  const descriptionInputRef = useRef()


  function submitHandler(event) {
    event.preventDefault()
    const enteredTitle = TitleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      adress: enteredAdress,
      description: enteredDescription
    }
    props.onAddMeetup(meetupData)
  }
  return <Card>
    <form className={ styles.form } onSubmit={ submitHandler }>
      <div className={ styles.control }>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id='title' ref={ TitleInputRef } />
      </div>
      <div className={ styles.control }>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id='image' ref={ imageInputRef } />
      </div>
      <div className={ styles.control }>
        <label htmlFor="adress">Meetup adress</label>
        <input type="text" required id='adress' ref={ adressInputRef } />
      </div>
      <div className={ styles.control }>
        <label htmlFor="description">Description</label>
        <textarea rows='5' required id='description' ref={ descriptionInputRef } />
      </div>
      <div className={ styles.actions }>
        <button type='submit'  >Submit</button>
      </div>


    </form>



  </Card>

}
export default NewMeetupForm;