import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import Cookies from 'js-cookie'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  LoginForm,
  Logo,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  CheckBox,
  LabelCheckbox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showError: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, showError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
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
      this.onLoginFailure(data.error_msg)
    }
  }

  onUserInputChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    this.setState({isShowPassword: event.target.checked})
  }

  render() {
    const {username, password, isShowPassword, showError, errorMsg} = this.state
    const showPassword = isShowPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          const logo = isDarkModeOn
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Container bgColor={isDarkModeOn}>
              <LoginForm onSubmit={this.onSubmitForm} bgColor={isDarkModeOn}>
                <Logo src={logo} alt="website logo" />
                <InputContainer>
                  <Label htmlFor="username" color={isDarkModeOn}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.onUserInputChange}
                    value={username}
                    color={isDarkModeOn}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password" color={isDarkModeOn}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type={showPassword}
                    placeholder="Password"
                    onChange={this.onPasswordChange}
                    value={password}
                    color={isDarkModeOn}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onShowPassword}
                    value={isShowPassword}
                  />
                  <LabelCheckbox htmlFor="checkbox" color={isDarkModeOn}>
                    Show Password
                  </LabelCheckbox>
                </CheckboxContainer>
                <InputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </InputContainer>
              </LoginForm>
            </Container>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Login
