// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  isButtonClicked = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    const text = isSubscribed ? 'Subscribed' : 'Subscribe'
    return text
  }

  render() {
    const buttonText = this.getButtonText()

    console.log(buttonText)
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="sub-heading">Thank you! Happy Learning</p>
        <button onClick={this.isButtonClicked} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
