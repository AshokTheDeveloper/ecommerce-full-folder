// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isValid: false,
    showErrorMsg: '',
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.validateInput(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  validateInput = showErrorMsg => {
    this.setState({isValid: true, showErrorMsg})
  }

  render() {
    const {username, password, isValid, showErrorMsg} = this.state
    const errorMsg = isValid ? <p className="error-msg">{showErrorMsg}</p> : ''

    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-input-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <div className="user-name-input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                onChange={this.onChangeUsername}
                type="input"
                id="username"
                className="input"
                value={username}
                placeholder="Username"
              />
            </div>
            <div className="password-input-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                onChange={this.onChangePassword}
                type="password"
                id="password"
                className="input"
                value={password}
                placeholder="Password"
              />
              <button type="submit" className="login-button">
                Login
              </button>
              {errorMsg}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
