// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class CowinDashboard extends Component {
  state = {
    vaccinationDataList: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  convertToCamelCase = obj => ({
    vaccineDate: obj.vaccine_date,
    doseOne: obj.dose_1,
    doseTwo: obj.dose_2,
  })

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        lastSevenDaysVaccination: data.last_7_days_vaccination.map(eachItem =>
          this.convertToCamelCase(eachItem),
        ),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        vaccinationDataList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(data)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view "
        className="failure-image"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderAllView = () => {
    const {vaccinationDataList} = this.state
    const {
      lastSevenDaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = vaccinationDataList
    return (
      <>
        <VaccinationCoverage vaccinationDetails={lastSevenDaysVaccination} />
        <VaccinationByGender vaccinationByGenderDetails={vaccinationByGender} />
        <VaccinationByAge vaccinationByAgeDetails={vaccinationByAge} />
      </>
    )
  }

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllView()
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
      <div className="cowin-dashboard-container">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="logo-text">Co-WIN</h1>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.renderResultView()}
      </div>
    )
  }
}

export default CowinDashboard
