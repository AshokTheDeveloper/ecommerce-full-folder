// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  onChangeInput = event => {
    const enteredLetters = event.target.value
    const lengthOfLetters = enteredLetters.length
    this.setState({lettersCount: lengthOfLetters})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="bg-container">
        <div className="calculator-image-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="inputSearch" className="input-index">
              Enter the phrase
            </label>
            <input
              id="inputSearch"
              type="text"
              className="search-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
            />
            <p className="letters-count" htmlFor="inputSearch">
              No.of Letters: {lettersCount}
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
