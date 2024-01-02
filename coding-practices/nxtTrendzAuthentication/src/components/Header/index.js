// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <nav className="header-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <ul className="nav-links">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="links">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="links">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/login" className="links login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
    <div className="mobile-links-container">
      <ul className="mobile-links">
        <li>
          <Link to="/" className="mobile-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="mobile-links">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="mobile-links">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/login" className="mobile-links login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
