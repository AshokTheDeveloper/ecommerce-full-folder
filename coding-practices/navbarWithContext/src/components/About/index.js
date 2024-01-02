// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBackground = isDarkTheme ? 'dark-about-background' : null
      const aboutHeading = isDarkTheme ? 'dark-about-heading' : null

      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBackground} `}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
            )}
            <h1 className={`about-heading ${aboutHeading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
