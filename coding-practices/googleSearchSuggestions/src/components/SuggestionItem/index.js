// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, getSuggestion} = props
  const {suggestion} = suggestionsList

  const onClickArrow = () => {
    getSuggestion(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-text">{suggestion}</p>
      <div className="arrow-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
          onClick={onClickArrow}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
