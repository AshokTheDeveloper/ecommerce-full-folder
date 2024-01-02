// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {imageUrl, name, description} = details
  return (
    <li className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h2 className="heading">{name}</h2>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
