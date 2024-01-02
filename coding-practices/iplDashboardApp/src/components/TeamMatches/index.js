// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerImage: '',
    latestMatch: '',
    recentMatch: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatches()
  }

  getFormattedObj = obj => ({
    id: obj.id,
    competingTeam: obj.competing_team,
    competingTeamLogo: obj.competing_team_logo,
    date: obj.date,
    firstInnings: obj.first_innings,
    manOfTheMatch: obj.man_of_the_match,
    matchStatus: obj.match_status,
    result: obj.result,
    secondInnings: obj.second_innings,
    umpires: obj.umpires,
    venue: obj.venue,
  })

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      bannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedObj(data.latest_match_details),
      recentMatchDetails: data.recent_matches.map(eachObj =>
        this.getFormattedObj(eachObj),
      ),
    }
    const {bannerUrl, latestMatchDetails, recentMatchDetails} = updatedData

    this.setState({
      bannerImage: bannerUrl,
      latestMatch: latestMatchDetails,
      recentMatch: recentMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {bannerImage, latestMatch, recentMatch, isLoading} = this.state

    let background
    if (id === 'CSK') {
      background = 'csk-bg-color'
    } else if (id === 'RCB') {
      background = 'rcb-bg-color'
    } else if (id === 'DC') {
      background = 'dc-bg-color'
    } else if (id === 'MI') {
      background = 'mi-bg-color'
    } else if (id === 'SH') {
      background = 'srh-bg-color'
    } else if (id === 'KXP') {
      background = 'punjab-bg-color'
    } else if (id === 'RR') {
      background = 'rr-bg-color'
    } else if (id === 'KKR') {
      background = 'kkr-bg-color'
    }

    return (
      <div className={`team-match-container ${background}`}>
        {isLoading ? (
          <div
            data-testid="loader"
            className={`loader-container ${background}`}
          >
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="banner-latest-container">
            <div className="banner-container">
              <img src={bannerImage} alt="team banner" className="banner" />
            </div>
            <div className="text-container">
              <h1 className="recent-matches-heading">Latest Matches</h1>
            </div>
            <div className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatch} />
            </div>
            <div className="match-cards">
              <ul className="match-card-list-container">
                {recentMatch.map(eachMatch => (
                  <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
