// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const statusViewConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    activeView: statusViewConstants.initial,
    productDetailsList: [],
    similarProductsList: [],
    productQuantity: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  convertToCamelCase = obj => ({
    id: obj.id,
    title: obj.title,
    description: obj.description,
    brand: obj.brand,
    style: obj.style,
    imageUrl: obj.image_url,
    price: obj.price,
    rating: obj.rating,
    availability: obj.availability,
    totalReviews: obj.total_reviews,
  })

  getProductDetails = async () => {
    this.setState({activeView: statusViewConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.id,
        title: data.title,
        description: data.description,
        brand: data.brand,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        availability: data.availability,
        totalReviews: data.total_reviews,
        similarProducts: data.similar_products.map(eachItem =>
          this.convertToCamelCase(eachItem),
        ),
      }
      const {similarProducts} = updatedData
      const convertedSimilarProducts = similarProducts
      this.setState({
        productDetailsList: updatedData,
        similarProductsList: convertedSimilarProducts,
        activeView: statusViewConstants.success,
      })
    } else {
      this.setState({activeView: statusViewConstants.failure})
    }
  }

  renderProductView = () => {
    const {productDetailsList, productQuantity} = this.state
    const {
      title,
      description,
      brand,
      imageUrl,
      price,
      rating,
      availability,
      totalReviews,
    } = productDetailsList
    return (
      <div className="product-bg-container">
        <div className="product-view-container">
          <div className="product-image-container">
            <img src={imageUrl} alt="product" className="product-image" />
          </div>
          <div className="product-text-container">
            <h1 className="product-title">{title}</h1>
            <p className="product-price">Rs {price}/-</p>
            <div className="rating-review-container">
              <div className="rating-star-container">
                <p className="product-rating">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-icon"
                />
              </div>
              <p className="product-total-reviews">{totalReviews} Reviews</p>
            </div>
            <p className="product-description">{description}</p>
            <p className="span">
              <span className="availability">Available: </span> {availability}
            </p>
            <p className="span">
              <span className="product-brand">Brand: </span> {brand}
            </p>
            <hr className="product-separator" />
            <div className="add-to-cart-container">
              <div className="quantity-button-container">
                <button
                  type="button"
                  onClick={this.onClickDecrease}
                  data-testid="minus"
                  className="counter-button"
                  aria-label="control quantity"
                >
                  <BsDashSquare className="control-icon" />
                </button>
                <p>{productQuantity}</p>
                <button
                  type="button"
                  data-testid="plus"
                  onClick={this.onClickIncrease}
                  className="counter-button"
                  aria-label="control quantity"
                >
                  <BsPlusSquare className="control-icon" />
                </button>
              </div>
              <button type="button" className="cart-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-view-heading">Product Not Found</h1>
      <Link to="/products">
        <button type="button" className="continue-button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

  renderSimilarProducts = () => {
    const {similarProductsList} = this.state
    return (
      <div className="similar-container">
        <h1 className="similar-products-heading">Similar Products</h1>
        <ul className="similar-products-list-container">
          {similarProductsList.map(eachObj => (
            <SimilarProductItem
              key={eachObj.id}
              similarProductDetails={eachObj}
            />
          ))}
        </ul>
      </div>
    )
  }

  onClickDecrease = () => {
    const {productQuantity} = this.state
    if (productQuantity < 2) {
      this.setState({productQuantity: 1})
    } else {
      this.setState(prevState => ({
        productQuantity: prevState.productQuantity - 1,
      }))
    }
  }

  onClickIncrease = () => {
    this.setState(prevState => ({
      productQuantity: prevState.productQuantity + 1,
    }))
  }

  renderAllView = () => (
    <>
      {this.renderProductView()}
      {this.renderSimilarProducts()}
    </>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderResultView = () => {
    const {activeView} = this.state
    switch (activeView) {
      case statusViewConstants.success:
        return this.renderAllView()
      case statusViewConstants.failure:
        return this.renderFailureView()
      case statusViewConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderResultView()}
      </div>
    )
  }
}

export default ProductItemDetails
