// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="counter"> {count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onClickCounter}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
