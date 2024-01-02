// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onClickToShowAnswer, isTrue} = props
  const {questionText, answerText, id} = faqDetails

  const onClickButton = () => {
    onClickToShowAnswer(id)
  }

  const icon = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const answer = isTrue ? (
    <div>
      <hr className="separator" />
      <p className="answer">{answerText}</p>
    </div>
  ) : (
    ''
  )

  const altValue = isTrue ? 'minus' : 'plus'

  return (
    <li className="list-item-container">
      <div className="faq-item-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="plus-button" onClick={onClickButton}>
          <img src={icon} alt={altValue} className="icon" />
        </button>
      </div>
      {answer}
    </li>
  )
}

export default FaqItem
