// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {status: 'Even', even: 'Even', odd: 'Odd', number: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 100)
    if (randomNumber % 2 === 0) {
      this.setState(prevState => ({
        status: prevState.even,
        number: randomNumber,
      }))
    } else {
      this.setState(prevState => ({
        status: prevState.odd,
        number: randomNumber,
      }))
    }
  }

  render() {
    const {status, number} = this.state
    return (
      <div className="container">
        <div className="even-odd-container">
          <h1 className="heading">Count {number} </h1>
          <div className="text-container">
            <p className="sub-heading">Count is {status}</p>
            <button
              className="button"
              type="button"
              onClick={this.generateRandomNumber}
            >
              Increment
            </button>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
