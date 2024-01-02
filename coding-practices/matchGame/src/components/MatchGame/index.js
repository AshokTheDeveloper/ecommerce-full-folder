import './index.css'
import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

class MatchGame extends Component {
  constructor(props) {
    super()
    const {tabsList} = props
    this.state = {
      selectedTab: tabsList[0].tabId,
      timer: 60,
      randomIndex: 0,
      score: 0,
      showScoreCard: false,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  onSelectTab = category => {
    this.setState({selectedTab: category})
  }

  getSelectedThumbnails = () => {
    const {imagesList} = this.props
    const {selectedTab} = this.state
    const filteredList = imagesList.filter(
      eachImage => eachImage.category === selectedTab,
    )

    return filteredList
  }

  clickThumbnail = id => {
    const {randomIndex} = this.state
    const {imagesList} = this.props

    const imageId = imagesList[randomIndex].id
    const lengthOfList = imagesList.length

    const randomImageIndex = Math.ceil(Math.random() * lengthOfList)

    if (id === imageId) {
      this.setState({randomIndex: randomImageIndex})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({showScoreCard: true})
      clearInterval(this.intervalId)
    }
  }

  tick = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.setState({
        showScoreCard: true,
      })
      clearInterval(this.intervalId)
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  restGame = () => {
    const {tabsList} = this.props
    this.setState({
      selectedTab: tabsList[0].tabId,
      timer: 60,
      randomIndex: 0,
      score: 0,
      showScoreCard: false,
    })
    this.componentDidMount()
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {selectedTab, timer, randomIndex, score, showScoreCard} = this.state
    const selectedThumbnails = this.getSelectedThumbnails()
    const displayImage = imagesList[randomIndex].imageUrl

    let display
    if (showScoreCard === true) {
      display = (
        <div className="game-over-bg-container">
          <div className="trophy-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="trophy-image"
            />
          </div>
          <p className="your-score-text">YOUR SCORE</p>
          <h1 className="final-score">{score}</h1>
          <div className="button-container">
            <button
              type="button"
              className="paly-again"
              onClick={this.restGame}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
                className="reset-icon"
              />
              PLAY AGAIN
            </button>
          </div>
        </div>
      )
    } else {
      display = (
        <div className="another-container">
          <div className="dynamic-image-container">
            <img src={displayImage} alt="match" className="dynamic-image" />
          </div>
          <ul className="tabs-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                key={eachTab.tabId}
                onSelectTab={this.onSelectTab}
                isTrue={eachTab.tabId === selectedTab}
              />
            ))}
          </ul>
          <ul className="thumbnails-container">
            {selectedThumbnails.map(eachImageDetails => (
              <ThumbnailItem
                thumbnailDetails={eachImageDetails}
                key={eachImageDetails.id}
                clickThumbnail={this.clickThumbnail}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="game-bg-container">
          <nav className="navbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <div className="score-and-timer-container">
              <p className="score">
                Score: <span className="score-counter">{score}</span>
              </p>
              <ul className="timer-container">
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                    alt="timer"
                    className="timer-image"
                  />
                </li>
                <li>
                  <p className="score-timer">{timer} Sec</p>
                </li>
              </ul>
            </div>
          </nav>

          <div className="display-image-bg-container">{display}</div>
        </div>
      </div>
    )
  }
}

export default MatchGame
