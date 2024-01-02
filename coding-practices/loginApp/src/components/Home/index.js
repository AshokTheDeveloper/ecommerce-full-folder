// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoggedInButtonClicked = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)

    return (
      <div className="container">
        <div className="login-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onLoggedInButtonClicked} />
          ) : (
            <Login login={this.onLoggedInButtonClicked} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
