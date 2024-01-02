// Write your code here
import './index.css'

const status = {
  registered: 'REGISTERED',
  yetToRegistered: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const eventRegistered = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <h1 className="event-text">You have already registered for the event</h1>
    </div>
  )

  const eventYetToRegistered = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="not-registered-image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const eventClosed = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h1 className="event-text">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case status.registered:
      return eventRegistered()
    case status.yetToRegistered:
      return eventYetToRegistered()
    case status.closed:
      return eventClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
