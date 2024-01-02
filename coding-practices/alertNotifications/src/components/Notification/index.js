// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-item">
      {children}
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
