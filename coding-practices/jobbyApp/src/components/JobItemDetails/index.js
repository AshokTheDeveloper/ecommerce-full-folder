import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaStar} from 'react-icons/fa'
import {IoLocationSharp, IoBag} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'

import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobDetailsList: [],
  }

  componentDidMount() {
    this.getJobCardItemDetails()
  }

  convertToCamelCase = item => ({
    id: item.id,
    title: item.title,
    rating: item.rating,
    skills: item.skills.map(eachItem => ({
      name: eachItem.name,
      imageUrl: eachItem.image_url,
    })),
    location: item.location,
    packagePerAnnum: item.package_per_annum,
    lifeAtCompany: {
      description: item.life_at_company.description,
      imageUrl: item.life_at_company.image_url,
    },
    jobDescription: item.job_description,
    employmentType: item.employment_type,
    companyLogoUrl: item.company_logo_url,
    companyWebsiteUrl: item.company_website_url,
  })

  getJobCardItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        jobDetails: this.convertToCamelCase(data.job_details),
        similarJobs: data.similar_jobs.map(item => ({
          id: item.id,
          title: item.title,
          rating: item.rating,
          location: item.location,
          jobDescription: item.job_description,
          employmentType: item.employment_type,
          companyLogoUrl: item.company_logo_url,
        })),
      }
      this.setState({
        jobDetailsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSkills = () => {
    const {jobDetailsList} = this.state
    const {jobDetails} = jobDetailsList
    const {skills} = jobDetails
    return (
      <div className="skills-bg-container">
        <h1 className="skills-heading">Skills</h1>
        <ul className="skills-container">
          {skills.map(eachSkill => (
            <li key={eachSkill.name} className="each-skill">
              <img
                src={eachSkill.imageUrl}
                alt={eachSkill.name}
                className="skill-image"
              />
              <p className="skill-name">{eachSkill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderLifeAtCompany = () => {
    const {jobDetailsList} = this.state
    const {jobDetails} = jobDetailsList
    const {lifeAtCompany} = jobDetails
    const {imageUrl, description} = lifeAtCompany
    return (
      <div className="life-at-company-bg-container">
        <h1 className="life-at-company-heading">Life at Company</h1>
        <div className="description-and-image-container">
          <p className="life-at-company-description">{description}</p>
          <img
            src={imageUrl}
            alt="life at company"
            className="life-at-company-image"
          />
        </div>
      </div>
    )
  }

  renderSimilarJobs = () => {
    const {jobDetailsList} = this.state
    const {similarJobs} = jobDetailsList
    return (
      <div className="similar-jobs-bg-container">
        <h1 className="similar-jobs-heading">Similar Jobs</h1>
        <ul className="similar-list-items">
          <div className="similar-jobs-card-container">
            {similarJobs.map(eachJob => (
              <li className="each-job-card" key={eachJob.id}>
                <div className="similar-logo-container">
                  <img
                    src={eachJob.companyLogoUrl}
                    alt="similar job company logo"
                    className="similar-job-company-logo"
                  />
                  <div className="title-and-rating-container">
                    <h1 className="similar-job-tile">{eachJob.title}</h1>
                    <div className="star-icon-rating-container">
                      <FaStar className="icon-star-rating" />
                      <p className="each-rating">{eachJob.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="similar-job-description-container">
                  <h1 className="similar-description-heading">Description</h1>
                  <p className="similar-jobs-description">
                    {eachJob.jobDescription}
                  </p>
                </div>
                <div className="location-and-employment-type-container">
                  <div className="similar-location-container">
                    <IoLocationSharp className="each-similar-location-icon" />
                    <p className="each-similar-location">{eachJob.location}</p>
                  </div>
                  <div className="similar-employment-type-container">
                    <IoBag className="each_similar-bag-icon" />
                    <p className="each-employment-type">
                      {eachJob.employmentType}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    )
  }

  renderJobItemDetails = () => {
    const {jobDetailsList} = this.state
    const {jobDetails} = jobDetailsList
    const {
      title,
      rating,
      location,
      companyLogoUrl,
      employmentType,
      packagePerAnnum,
      jobDescription,
      companyWebsiteUrl,
    } = jobDetails
    return (
      <div className="job-details-bg-container">
        <div className="job-details-container">
          <div className="logo-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-details-logo"
            />
            <div className="title-rating-container">
              <h1 className="details-title">{title}</h1>
              <div className="rating-star-container">
                <FaStar className="icon-star" />
                <p className="details-rating">{rating}</p>
              </div>
            </div>
          </div>

          <div className="location-type-package-container">
            <div className="job-location-employment-type-container">
              <div className="location-and-icon-container">
                <IoLocationSharp className="job-location-icon" />
                <p className="job-location">{location}</p>
              </div>
              <div className="job-and-icon-container">
                <IoBag className="details-bag-icon" />
                <p className="job-location">{employmentType}</p>
              </div>
            </div>
            <p className="annual-package">{packagePerAnnum}</p>
          </div>

          <hr className="separator" />

          <div className="description-web-link-container">
            <h1 className="job-description-heading">Description</h1>
            <div className="web-link-container">
              <a href={companyWebsiteUrl} className="web-link">
                Visit
                <BiLinkExternal className="link-external" />
              </a>
            </div>
          </div>

          <p className="details-job-description">{jobDescription}</p>
          {this.renderSkills()}
          {this.renderLifeAtCompany()}
        </div>
        {this.renderSimilarJobs()}
      </div>
    )
  }

  renderFailureView = () => (
    <div className="similar-job-failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-text">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for
      </p>
      <button
        className="retry-button"
        type="button"
        onClick={this.getJobCardItemDetails}
      >
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderActiveView = () => {
    const {apiStatus} = this.state
    // const apiStatus = apiStatusConstants.failure
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="job-item-details-bg-container">
        <Header />
        {this.renderActiveView()}
      </div>
    )
  }
}

export default JobItemDetails
