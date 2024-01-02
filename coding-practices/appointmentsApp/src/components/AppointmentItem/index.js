// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onClickStar} = props
  const {name, date, id, isStarred} = appointmentDetails

  const onClickStarredIcon = () => {
    onClickStar(id)
  }

  const starIcon = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item-container">
      <div>
        <p className="name">{name}</p>
        <p className="date">Date: {date}</p>
      </div>
      <button
        type="button"
        data-testid="star"
        onClick={onClickStarredIcon}
        className="starred-button"
      >
        <img src={starIcon} className="star" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
