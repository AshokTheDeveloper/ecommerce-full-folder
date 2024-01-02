// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item-container">
      <button type="button" className="button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
