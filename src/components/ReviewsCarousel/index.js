import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  leftArrowClicked = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  rightArrowClicked = () => {
    const {activeIndex} = this.state
    const {reviewsData} = this.props
    if (activeIndex < reviewsData.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsData[
      activeIndex
    ]
    return (
      <div className="reviews-container">
        <h1 className="heading"> Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            onClick={this.leftArrowClicked}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="arrow-button"
            type="button"
            onClick={this.rightArrowClicked}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
