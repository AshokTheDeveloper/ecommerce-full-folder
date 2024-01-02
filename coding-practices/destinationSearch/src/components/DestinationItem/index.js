// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="destination-item-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
