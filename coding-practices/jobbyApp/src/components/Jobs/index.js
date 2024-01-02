import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import './index.css'
import Header from '../Header'
import JobCard from '../JobCard'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    profileDetails: '',
    showProfile: 'true',
    apiStatus: apiStatusConstants.initial,
    jobsList: [],
    searchInput: '',
    employmentType: [],
    salaryRange: '',
  }

  componentDidMount() {
    this.getJobsDetails()
    this.getProfileDetails()
  }

  getJobsDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {employmentType, salaryRange, searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentType.join()}&minimum_package=${salaryRange}&search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(eachJob => ({
        id: eachJob.id,
        title: eachJob.title,
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
      }))
      this.setState({
        jobsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const profileData = data.profile_details
      const updatedData = {
        name: profileData.name,
        profileImageUrl: profileData.profile_image_url,
        shortBio: profileData.short_bio,
      }
      this.setState({profileDetails: updatedData})
    } else {
      this.setState({showProfile: false})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderProfilePicture = () => {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile">
        <img src={profileImageUrl} alt="profile" className="profile-pic" />
        <h2 className="profile-name">{name}</h2>
        <p className="designation">{shortBio}</p>
      </div>
    )
  }

  onGetProfileDetails = () => {
    this.getProfileDetails()
  }

  renderProfile = () => {
    const {showProfile} = this.state
    return showProfile ? (
      this.renderProfilePicture()
    ) : (
      <div className="retry-button-container">
        <button
          className="retry-button"
          type="button"
          onClick={this.onGetProfileDetails}
          aria-label="retry button"
        >
          Retry
        </button>
      </div>
    )
  }

  renderJobCards = () => {
    const {jobsList} = this.state
    return (
      <ul className="job-details-bg-container">
        {jobsList.map(eachCardDetails => (
          <JobCard key={eachCardDetails.id} jobDetails={eachCardDetails} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
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
        to="/jobs"
        className="retry-button"
        type="button"
        aria-label="retry button"
        onClick={this.getJobsDetails}
      >
        Retry
      </button>
    </div>
  )

  renderNoJobsView = () => (
    <div className="no-jobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-image"
      />
      <h1 className="no-jobs-text">No Jobs Found</h1>
      <p className="no-jobs-description">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderActiveView = () => {
    const {jobsList} = this.state
    const lengthOfJobsList = jobsList.length
    if (lengthOfJobsList > 0) {
      return this.renderJobCards()
    }
    return this.renderNoJobsView()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onChangeEmploymentType = event => {
    this.setState(
      prevState => ({
        employmentType: [...prevState.employmentType, event.target.id],
      }),
      this.getJobsDetails,
    )
  }

  onChangeSalaryRange = event => {
    this.setState({salaryRange: event.target.id}, this.getJobsDetails)
  }

  renderTypeOfEmployment = () => (
    <div className="type-of-employment-container">
      <h1 className="employment-type-heading">Type of Employment</h1>
      <ul className="list-container">
        {employmentTypesList.map(eachType => (
          <li className="check-box-list" key={eachType.employmentTypeId}>
            <input
              id={eachType.employmentTypeId}
              type="checkbox"
              className="checkbox-input"
              onChange={this.onChangeEmploymentType}
              value={eachType.label}
              aria-label={eachType.label}
            />
            <p htmlFor={eachType.employmentTypeId} className="check-box-label">
              {eachType.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )

  renderSalaryRange = () => (
    <div className="salary-range-container">
      <h1 className="employment-type-heading">Salary Range</h1>
      <ul className="list-container">
        {salaryRangesList.map(eachType => (
          <li className="check-box-list" key={eachType.salaryRangeId}>
            <input
              id={eachType.salaryRangeId}
              type="radio"
              className="checkbox-input"
              name="ratio button"
              onChange={this.onChangeSalaryRange}
              value={eachType.label}
            />
            <label htmlFor={eachType.salaryRangeId} className="check-box-label">
              {eachType.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  getSearchedJobs = () => {
    this.getJobsDetails()
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <div className="jobs-container">
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <button
            type="button"
            data-testid="searchButton"
            aria-label="search button"
            className="search-icon-button"
            onClick={this.getSearchedJobs}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
      </div>
    )
  }

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderActiveView()
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
      <div>
        <Header />
        <div className="jobs-bg-container">
          <div className="jobs-profile-wrapper">
            <div className="profile-container">
              {this.renderProfile()}
              <hr className="separator" />
              {this.renderTypeOfEmployment()}
              <hr className="separator" />
              {this.renderSalaryRange()}
            </div>
            <div className="jobs-container">
              {this.renderSearchInput()} {this.renderResultView()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
