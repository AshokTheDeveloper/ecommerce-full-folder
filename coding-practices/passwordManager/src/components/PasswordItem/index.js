import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isPasswordVisible} = props
  const {website, username, password, id} = passwordDetails

  const onClickDelete = () => {
    deletePassword(id)
    console.log('clicked with id: ', id)
  }

  const logo = website[0].toUpperCase()

  const encryptedPassword = isPasswordVisible ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  return (
    <li className="password-item-container">
      <div className="logo-and-text-container">
        <p className="logo-tex">{logo}</p>
        <div className="text-container">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {encryptedPassword}
        </div>
      </div>

      <button
        className="delete-button"
        onClick={onClickDelete}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
