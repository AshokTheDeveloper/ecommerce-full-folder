import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  constructor() {
    super()
    this.state = {
      passwordsList: [],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      searchInput: '',
      isPasswordVisible: false,
    }
  }

  onAddPassword = event => {
    event.preventDefault()
    const {
      passwordsList,
      websiteInput,
      usernameInput,
      passwordInput,
    } = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState({
      passwordsList: [...passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    })
  }

  onWebsiteInputChange = event => {
    this.setState({websiteInput: event.target.value})
  }

  onUsernameInputChange = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPasswordInputChange = event => {
    this.setState({passwordInput: event.target.value})
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchedItem = () => {
    const {passwordsList, searchInput} = this.state
    const searchedPasswordsList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchedPasswordsList
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordsList: filteredList})
  }

  isCheckBoxChecked = event => {
    this.setState({isPasswordVisible: event.target.checked})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isPasswordVisible,
    } = this.state

    const searchedPasswordList = this.getSearchedItem()

    const isTherePasswords = searchedPasswordList.length
    let display
    if (isTherePasswords === 0) {
      display = (
        <div className="no-passwords-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            className="no-password-image"
            alt="no passwords"
          />
          <p className="no-password-heading">No Passwords</p>
        </div>
      )
    } else {
      display = (
        <div className="items-bg-container">
          <ul className="list-of-passwords-container">
            {searchedPasswordList.map(eachPassword => (
              <PasswordItem
                passwordDetails={eachPassword}
                key={eachPassword.id}
                deletePassword={this.deletePassword}
                isPasswordVisible={isPasswordVisible}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="logo-container container-width">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="input-section-bg-container container-width">
          <form className="input-bg-container" onSubmit={this.onAddPassword}>
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon"
              />
              <input
                onChange={this.onWebsiteInputChange}
                value={websiteInput}
                type="text"
                className="input"
                placeholder="Enter Website"
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="icon"
              />
              <input
                onChange={this.onUsernameInputChange}
                value={usernameInput}
                type="text"
                className="input"
                placeholder="Enter Username"
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="icon"
              />
              <input
                onChange={this.onPasswordInputChange}
                value={passwordInput}
                type="password"
                className="input"
                placeholder="Enter Password"
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>

          <div className="picture-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="home-picture"
            />
          </div>
        </div>
        <div className="password-section-bg-container container-width">
          <div className="password-heading-and-search-input-container">
            <div className="passwords-container">
              <h1 className="password-counter-heading">Your Passwords</h1>
              <p className="password-count">{isTherePasswords}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="icon"
                alt="search"
              />
              <input
                onChange={this.onInputChange}
                value={searchInput}
                type="search"
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="passwords-list-bg-container">
            <div className="check-box-container">
              <input
                id="checkbox"
                type="checkbox"
                className="check-box"
                onChange={this.isCheckBoxChecked}
              />
              <label className="show-passwords-text" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
          </div>
          {display}
        </div>
      </div>
    )
  }
}

export default PasswordManager
