import './index.css'

const EmojiItem = props => {
  const {emojisList, onShowThanks} = props
  const {imageUrl, name} = emojisList

  const onClickEmoji = () => {
    onShowThanks(name)
  }

  return (
    <>
      <li className="emoji-item-container">
        <img
          src={imageUrl}
          alt={name}
          className="image"
          onClick={onClickEmoji}
        />
        <p className="emoji-name">{name}</p>
      </li>
    </>
  )
}

export default EmojiItem
