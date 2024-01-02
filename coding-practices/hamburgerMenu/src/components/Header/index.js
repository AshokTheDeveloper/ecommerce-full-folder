// Write your code here
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Popup} from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="logo-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          aria-label="hamburgerIconButton"
          className="hamburger-button"
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
            aria-label="close"
            className="close-button"
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul>
            <li className="link-item">
              <Link
                to="/"
                className="home-icon-container"
                onClick={() => close()}
              >
                <AiFillHome className="home-icon" />
                <h1 className="home-text">Home</h1>
              </Link>
            </li>
            <li className="link-item">
              <Link
                to="/about"
                className="home-icon-container"
                onClick={() => close()}
              >
                <BsInfoCircleFill className="home-icon" />
                <h1 className="home-text">About</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
