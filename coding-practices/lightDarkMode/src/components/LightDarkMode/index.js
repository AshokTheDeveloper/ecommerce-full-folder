// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isModeChanged: true}

  changeMode = () => {
    this.setState(prevState => ({isModeChanged: !prevState.isModeChanged}))
  }

  getClassName = () => {
    const {isModeChanged} = this.state
    const mode = isModeChanged ? 'dark-mode-container' : 'light-mode-container'
    return mode
  }

  getButtonText = () => {
    const {isModeChanged} = this.state
    const buttonText = isModeChanged ? 'Light Mode' : 'Dark Mode'
    return buttonText
  }

  getheadingClass = () => {
    const {isModeChanged} = this.state
    const heading = isModeChanged ? 'dark-mode-heading' : 'light-mode-heading'
    return heading
  }

  render() {
    const mode = this.getClassName()
    const buttonText = this.getButtonText()
    const heading = this.getheadingClass()
    return (
      <div className="container">
        <div className={mode}>
          <h1 className={heading}>Click To The Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
