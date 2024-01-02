// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      teamName: eachItem.name,
      teamImage: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
    console.log(data)
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-list-container">
              {teamsList.map(eachObj => (
                <TeamCard key={eachObj.id} teamDetails={eachObj} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
