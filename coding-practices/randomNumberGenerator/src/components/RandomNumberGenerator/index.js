// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="random-number-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
