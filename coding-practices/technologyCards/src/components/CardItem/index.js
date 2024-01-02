// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-container ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="icon" />
      </div>
    </li>
  )
}

export default CardItem
