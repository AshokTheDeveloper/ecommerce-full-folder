import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({count: this.state.count + 1})
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    console.log('render() called')
    const {count} = this.state
    return (
      <div className="counter-container">
        <p className="count">Count {count}</p>
        <div>
          <button className="increase-button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="decrease-button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
