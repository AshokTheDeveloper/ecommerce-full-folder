// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      const navBackGround = isDarkTheme ? 'dark' : null
      const darkLinks = isDarkTheme ? 'dark-links' : null

      return (
        <div className={`navbar-container ${navBackGround}`}>
          <Link to="/" className="links">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo"
              />
            )}
          </Link>
          <ul className="nav-links-container">
            <li>
              <Link to="/" className={`links ${darkLinks}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`links ${darkLinks}`}>
                About
              </Link>
            </li>
          </ul>
          <div className="dark-or-white-theme-container">
            <button
              type="button"
              aria-label="theme"
              className="theme-button"
              onClick={changeTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                  data-testid="theme"
                />
              )}
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
