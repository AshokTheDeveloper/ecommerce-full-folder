import {Link} from 'react-router-dom'
import {Component} from 'react'
import {FaStar} from 'react-icons/fa'
import {IoLocationSharp, IoBag} from 'react-icons/io5'
import './index.css'

class JobCard extends Component {
  renderJobCards = () => {
    const {jobDetails} = this.props
    const {
      id,
      title,
      rating,
      location,
      companyLogoUrl,
      jobDescription,
      employmentType,
      packagePerAnnum,
    } = jobDetails

    return (
      <li className="job-item-container">
        <Link to={`/jobs/${id}`} className="job-card-list">
          <div className="company-logo-and-title-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div className="title-and-rating-container">
              <h1 className="job-title">{title}</h1>
              <div className="rating-container">
                <FaStar className="star-icon" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-employment-package-container">
            <div className="location-employment-container">
              <div className="location-container">
                <IoLocationSharp className="location-icon" />
                <p className="location-text">{location}</p>
              </div>
              <div className="employment-type-container">
                <IoBag className="bag-icon" />
                <p className="employment-type-text">{employmentType}</p>
              </div>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
          <hr className="separator" />
          <div className="description-container">
            <p className="description-text">Description</p>
            <p className="job-description">{jobDescription}</p>
          </div>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.renderJobCards()}</h1>
      </div>
    )
  }
}

export default JobCard
