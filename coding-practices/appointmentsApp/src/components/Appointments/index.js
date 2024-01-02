// Write your code here
import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
    category: false,
  }

  onTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onDateChange = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  createAppointment = event => {
    event.preventDefault()

    const {titleInput, dateInput, appointmentList} = this.state

    const newAppointment = {
      id: uuidv4(),
      name: titleInput,
      date: format(new Date(dateInput), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }
    this.setState({
      appointmentList: [...appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    })
  }

  onClickStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarred = () => {
    this.setState(prevState => ({
      category: !prevState.category,
    }))
  }

  getStarredAppointments = () => {
    const {appointmentList} = this.state
    const starredAppointments = appointmentList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )
    return starredAppointments
  }

  render() {
    const starredAppointments = this.getStarredAppointments()
    const {appointmentList, titleInput, dateInput, category} = this.state
    let appointmentsList
    if (category === true) {
      appointmentsList = starredAppointments
    } else {
      appointmentsList = appointmentList
    }

    const starred = category ? 'starred' : ''

    return (
      <div className="bg-container">
        <div className="appointments-bg-container">
          <div className="input-bg-container">
            <form
              className="form-input-container"
              onSubmit={this.createAppointment}
            >
              <h1 className="appointment-heading">Add Appointment</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                value={titleInput}
                onChange={this.onTitleInput}
                className="input-title input"
                type="text"
                id="title"
                placeholder="Title"
              />
              <label className="label" htmlFor="date">
                DATE
              </label>
              <input
                value={dateInput}
                className="input-date input"
                type="date"
                id="date"
                onChange={this.onDateChange}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="bg-image"
              />
            </div>
          </div>
          <hr className="separator" />
          <div className="appointments-list-container">
            <div className="heading-star-button-container">
              <h1 className="heading">Appointments</h1>
              <button
                type="button"
                className={`star-button ${starred}`}
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <div className="items-container">
              <ul className="appointments-list-item-container">
                {appointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    appointmentDetails={eachAppointment}
                    key={eachAppointment.id}
                    onClickStar={this.onClickStar}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
