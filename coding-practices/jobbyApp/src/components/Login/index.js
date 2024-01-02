import './index.css'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onLoginSuccess(data.jwt_token)
    } else {
      const data = await response.json()
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderLoginForm = () => {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="logo-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <form className="from-container" onSubmit={this.onFormSubmit}>
          <div className="input-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              className="input"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
              aria-label="USERNAME"
            />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
              aria-label="PASSWORD"
            />
          </div>
          <div className="input-container">
            <button type="submit" className="login-button" aria-label="login">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <div className="login-container">{this.renderLoginForm()}</div>
  }
}

export default Login
