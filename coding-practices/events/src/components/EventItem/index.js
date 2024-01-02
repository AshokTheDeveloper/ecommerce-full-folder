// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickItem} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const onClickEventItem = () => {
    onClickItem(registrationStatus)
  }
  return (
    <li className="event-item-container">
      <button type="button" className="button" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="event-name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
