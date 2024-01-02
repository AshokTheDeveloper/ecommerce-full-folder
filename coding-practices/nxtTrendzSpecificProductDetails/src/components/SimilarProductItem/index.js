// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {similarProductDetails} = props
  const {imageUrl, title, brand, price, rating} = similarProductDetails
  return (
    <div className="similar-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-image"
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-brand">by {brand}</p>
      <div className="price-rating-container">
        <p>Rs {price}/-</p>
        <div className="similar-rating-star-container">
          <p className="product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-icon"
          />
        </div>
      </div>
    </div>
  )
}

export default SimilarProductItem
