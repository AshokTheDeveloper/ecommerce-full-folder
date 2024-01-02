// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    total: 0,
    headsCount: 0,
    tailsCount: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  genRandomNumber = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(preValue => ({total: preValue.total + 1}))

    if (tossResult === 0) {
      this.setState(preValue => ({
        headsCount: preValue.headsCount + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(preValue => ({
        tailsCount: preValue.tailsCount + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, headsCount, tailsCount, image} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-bg-container">
          <div className="text-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
          </div>
          <div className="image-container">
            <img src={image} className="toss-image" alt="toss result" />
          </div>
          <button
            className="button"
            type="button"
            onClick={this.genRandomNumber}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="text">Total: {total}</p>
            <p className="text">Heads: {headsCount}</p>
            <p className="text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
