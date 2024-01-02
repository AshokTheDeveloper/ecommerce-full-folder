// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  console.log(score, topScore)
  return (
    <>
      <nav className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
      </nav>
    </>
  )
}

export default NavBar
