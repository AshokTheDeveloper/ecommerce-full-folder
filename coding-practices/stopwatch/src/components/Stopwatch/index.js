// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {timerInMinutes: 0, timerInSeconds: 0}
  }

  startTimer = () => {
    this.IntervalId = setInterval(() => {
      this.startCounter()
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.IntervalId)
  }

  resetTimer = () => {
    clearInterval(this.IntervalId)
    this.setState({timerInSeconds: 0, timerInMinutes: 0})
  }

  startCounter = () => {
    const {timerInSeconds} = this.state
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
    if (timerInSeconds === 59) {
      this.setState(prevState => ({
        timerInMinutes: prevState.timerInMinutes + 1,
      }))
      this.setState({timerInSeconds: 0})
    }
  }

  render() {
    const {timerInSeconds, timerInMinutes} = this.state
    const stringifiedTimerInSeconds =
      timerInSeconds > 9 ? timerInSeconds : `0${timerInSeconds}`
    const stringifiedTimerInMinutes =
      timerInMinutes > 9 ? timerInMinutes : `0${timerInMinutes}`
    return (
      <div className="bg-container">
        <div className="stop-watch-container">
          <div className="timer-container">
            <h1 className="stop-watch-heading">Stopwatch</h1>
            <div className="timer-text-container">
              <div className="heading-container">
                <img
                  className="stopwatch-icon"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p className="timer-text">timer</p>
              </div>
              <div className="counter-container">
                <h1 className="counter-timer">
                  {stringifiedTimerInMinutes}:{stringifiedTimerInSeconds}
                </h1>
              </div>
              <div className="button-container">
                <button
                  className="button start"
                  type="button"
                  onClick={this.startTimer}
                >
                  Start
                </button>
                <button
                  className="button stop"
                  type="button"
                  onClick={this.stopTimer}
                >
                  Stop
                </button>
                <button
                  className="button reset"
                  type="button"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
              alt="logo"
              className="logo"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
