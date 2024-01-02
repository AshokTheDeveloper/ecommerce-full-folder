// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const onChangeContent = event => {
            onToggleShowContent({showContent: event.target.checked})
          }

          const onChangeLeftNavbar = event => {
            onToggleShowLeftNavbar({activeValue: event.target.checked})
          }

          const onChangeRightNavbar = event => {
            onToggleShowRightNavbar({activeValue: event.target.checked})
          }

          return (
            <div className="controller-container">
              <h1 className="layout-heading">Layout</h1>
              <div className="check-box-container">
                <div className="input-container">
                  <input
                    type="checkbox"
                    className="input"
                    id="content"
                    checked={showContent}
                    onChange={onChangeContent}
                  />
                  <label htmlFor="content">Content</label>
                </div>
                <div className="input-container">
                  <input
                    type="checkbox"
                    className="input"
                    id="leftNavbar"
                    checked={showLeftNavbar}
                    onChange={onChangeLeftNavbar}
                  />
                  <label htmlFor="leftNavbar">Left Navbar</label>
                </div>
                <div className="input-container">
                  <input
                    type="checkbox"
                    className="input"
                    id="rightNavbar"
                    checked={showRightNavbar}
                    onChange={onChangeRightNavbar}
                  />
                  <label htmlFor="rightNavbar">Right Navbar</label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
