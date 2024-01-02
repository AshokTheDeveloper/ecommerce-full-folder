/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    clickedEmojisIdsList: [],
    gameStatus: false,
    score: 0,
    updateTopScore: 0,
    isScoreHidden: true,
  }

  finishGameAndSetTopScore = topScore => {
    const {updateTopScore} = this.state
    if (topScore > updateTopScore) {
      this.setState({updateTopScore: topScore})
    }
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisIdsList} = this.state

    const isEmojiThere = clickedEmojisIdsList.includes(id)

    const clickedEmojiLength = clickedEmojisIdsList.length

    if (isEmojiThere) {
      this.setState({gameStatus: true})
      this.setState({isScoreHidden: false})
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisIdsList: [...prevState.clickedEmojisIdsList, id],
      }))
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    const {score} = this.state
    this.finishGameAndSetTopScore(score)
    this.setState({
      score: 0,
      gameStatus: false,
      clickedEmojisIdsList: [],
      isScoreHidden: true,
    })
  }

  getGameWon = () => {
    const {emojisList} = this.props
    const {clickedEmojisIdsList} = this.state
    if (clickedEmojisIdsList.length === emojisList.length) {
      return true
    }
    return false
  }

  render() {
    const {score, gameStatus, updateTopScore, isScoreHidden} = this.state
    const gameWon = this.getGameWon()
    const shuffledEmojis = this.shuffledEmojisList()
    let emojis
    if (gameStatus === false && gameWon === false) {
      emojis = (
        <ul className="emoji-bg-container">
          {shuffledEmojis.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      )
    } else if (gameWon === true) {
      emojis = (
        <div className="game-lost-container">
          <div className="game-lost-text-container">
            <h1 className="lose-game-text">You Won</h1>
            <p className="lost-game-score-text">Best Score</p>
            <p className="lost-game-score">12/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={this.onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
          <div className="game-lost-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="lost-game-image"
              alt="win or lose"
            />
          </div>
        </div>
      )
    } else {
      emojis = (
        <div className="game-lost-container">
          <div className="game-lost-text-container">
            <h1 className="lose-game-text">You Lose</h1>
            <p className="lost-game-score-text">Score </p>
            <p className="lost-game-score">
              {score}/{12}
            </p>
            <button
              type="button"
              className="play-again-button"
              onClick={this.onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
          <div className="game-lost-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="lost-game-image"
              alt="win or lose"
            />
          </div>
        </div>
      )
    }

    let showScore
    if (isScoreHidden && gameWon === false) {
      showScore = (
        <div className="score-container">
          <p className="score main-score">Score: {score}</p>
          <p className="score top-score">Top Score: {updateTopScore}</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="navbar-score-container">
          <NavBar />
          {showScore}
        </div>
        <div className="emoji-card-container">{emojis}</div>
      </div>
    )
  }
}

export default EmojiGame
