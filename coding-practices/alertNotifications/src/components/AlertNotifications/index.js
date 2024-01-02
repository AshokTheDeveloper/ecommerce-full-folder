// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <div className="notification-container">
            <div className="text-icon-container">
              <AiFillCheckCircle className="icon color-success" />
              <div>
                <h1 className="heading color-success">Success</h1>
                <p className="description">
                  You can access all the files in the folder
                </p>
              </div>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="notification-container">
            <div className="text-icon-container">
              <RiErrorWarningFill className="icon color-error" />
              <div>
                <h1 className="heading color-error">Error</h1>
                <p className="description">
                  Sorry, you are not authorized to have access to delete the
                  file
                </p>
              </div>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="notification-container">
            <div className="text-icon-container">
              <MdWarning className="icon color-warning" />
              <div>
                <h1 className="heading color-warning">Warning</h1>
                <p className="description">
                  Viewers of this file can see comments and suggestions
                </p>
              </div>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="notification-container">
            <div className="text-icon-container">
              <MdInfo className="icon color-info" />
              <div>
                <h1 className="heading color-info">Info</h1>
                <p className="description">
                  Anyone on the internet can view these files
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
