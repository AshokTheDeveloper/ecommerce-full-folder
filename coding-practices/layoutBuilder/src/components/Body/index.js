// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <div className="left-navbar-container">
          <h1 className="left-menu-heading">Left Navbar Menu</h1>
          <ul className="list-of-items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="description">
            Lorem ipsum Filler text is text that shares some characteristics of
            a real written text, but is random or otherwise generated. It may be
            used to display a sample of fonts, generate text for testing, or to
            spoof an e-mail spam filter
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="right-navbar-container">
          <h1 className="right-navbar-heading">Right Navbar</h1>
          <div className="block-1">
            <p>Ad 1</p>
          </div>
          <div className="block-2">
            <p>Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? renderLeftNavbar() : null}

          {showContent ? renderContent() : null}

          {showRightNavbar ? renderRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
