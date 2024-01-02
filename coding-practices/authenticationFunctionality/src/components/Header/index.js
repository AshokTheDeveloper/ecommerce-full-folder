// Write your JS code here
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <li className="link">
      <Link to="/" className="links">
        Home
      </Link>
    </li>
    <li className="link">
      <Link to="/about" className="links">
        About
      </Link>
    </li>
  </ul>
)

export default withRouter(Header)
