// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onClickBackWard = () => {
    const {index} = this.state
    if (index === 0) {
      this.setState({index: 0})
    } else {
      this.setState(prevValue => ({index: prevValue.index - 1}))
    }
  }

  onClickForward = () => {
    const {reviewsList} = this.props
    const lengthOfList = reviewsList.length - 1

    const {index} = this.state
    if (index === lengthOfList) {
      this.setState({index: lengthOfList})
    } else {
      this.setState(prevValue => ({index: prevValue.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="review-heading">Reviews</h1>
        <div className="review-carousel-bg-container">
          <button
            data-testid="leftArrow"
            className="button"
            type="button"
            onClick={this.onClickBackWard}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="profile-container">
            <img
              src={reviewsList[index].imgUrl}
              className="image"
              alt={reviewsList[index].username}
            />
            <p className="user-name">{reviewsList[index].username}</p>
            <p className="company-name">{reviewsList[index].companyName}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="button"
            type="button"
            onClick={this.onClickForward}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <div className="description-container">
          <p className="description">{reviewsList[index].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
