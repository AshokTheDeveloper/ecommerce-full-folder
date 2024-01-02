// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {counter: 0}

  onAccelerate = () => {
    console.log('clicked')
    let {counter} = this.state
    if (counter === 200) {
      counter = 200
    } else {
      this.setState(prevState => ({counter: prevState.counter + 10}))
    }
  }

  onBrake = () => {
    console.log('Brake clicked')
    console.log('clicked')
    let {counter} = this.state
    if (counter === 0) {
      counter = 0
    } else {
      this.setState(prevState => ({counter: prevState.counter - 10}))
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <div className="acceleration-counter-container">
          <h1 className="counter-heading">
            Speed is {counter}
            mph
          </h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div className="buttons-container">
          <button className="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button right-button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
