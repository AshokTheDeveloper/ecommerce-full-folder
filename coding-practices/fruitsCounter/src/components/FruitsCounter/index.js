// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCounter: 0, bananaCounter: 0}

  onIncrementMangoCount = () => {
    console.log('mango button clicked')
    this.setState(prevState => ({mangoCounter: prevState.mangoCounter + 1}))
  }

  onIncrementBananaCount = () => {
    console.log('banana button clicked')
    this.setState(prevState => ({bananaCounter: prevState.bananaCounter + 1}))
  }

  render() {
    const {mangoCounter, bananaCounter} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-bg-container">
          <h1 className="heading">
            Bob ate <span className="counter-text"> {mangoCounter} </span>
            mangoes
            <span className="counter-text"> {bananaCounter} </span> bananas
          </h1>
          <div className="bottom-section-container">
            <div className="mangos-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.onIncrementMangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="mangos-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.onIncrementBananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
