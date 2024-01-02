import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {IoBag} from 'react-icons/io5'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <ul className="nav-container">
        <li className="link-item">
          <Link to="/" className="links">
            <h1 className="link-heading">Home</h1>
          </Link>
        </li>
        <li className="link-item">
          <Link to="/jobs" className="links">
            <h1 className="link-heading">Jobs</h1>
          </Link>
        </li>
      </ul>
      <div className="mobile-navbar-container">
        <li className="mobile-links-list">
          <Link to="/" className="mobile-link">
            <AiFillHome className="mobile-icons" />
          </Link>
        </li>
        <li className="mobile-links-list">
          <Link to="/jobs" className="mobile-link">
            <IoBag className="mobile-icons" />
          </Link>
        </li>
        <li className="mobile-links-list">
          <button
            type="button"
            className="mobile-logout-button"
            aria-label="Logout"
            onClick={onClickLogout}
          >
            <FiLogOut className="mobile-icons" />
          </button>
        </li>
      </div>
      <button
        type="button"
        className="logout-button"
        onClick={onClickLogout}
        aria-label="Logs"
      >
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
