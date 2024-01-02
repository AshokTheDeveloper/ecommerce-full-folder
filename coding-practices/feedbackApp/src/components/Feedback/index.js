// Write your React code here.
import {Component} from 'react'
import './index.css'
import EmojiItem from '../EmojiItem'

class Feedback extends Component {
  state = {
    isVisible: true,
  }

  onShowThanks = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {isVisible} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let show
    if (isVisible === true) {
      show = (
        <div className="feedback-bg-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance ?
          </h1>
          <ul className="feedback-emoji-container">
            {emojis.map(eachObj => (
              <EmojiItem
                emojisList={eachObj}
                key={eachObj.id}
                onShowThanks={this.onShowThanks}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      show = (
        <div className="thanks-bg-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="thank-you-name">Thank You!</h1>
          <p className="description">
            We will use your feedback to improve customer support performance
          </p>
        </div>
      )
    }

    return <div className="bg-container">{show}</div>
  }
}

export default Feedback
