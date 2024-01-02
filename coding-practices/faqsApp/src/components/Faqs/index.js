// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFaqsList: props.faqsList.map(eachFaq => ({...eachFaq, isTrue: false})),
    }
  }

  onClickToShowAnswer = id => {
    this.setState(prevState => ({
      newFaqsList: prevState.newFaqsList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isTrue: !eachFaq.isTrue}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {newFaqsList} = this.state
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <div className="question-and-answers-bg-container">
            <h1 className="heading">FAQs</h1>
            <ul className="faq-container">
              {newFaqsList.map(eachFaq => (
                <FaqItem
                  faqDetails={eachFaq}
                  key={eachFaq.id}
                  onClickToShowAnswer={this.onClickToShowAnswer}
                  isTrue={eachFaq.isTrue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
