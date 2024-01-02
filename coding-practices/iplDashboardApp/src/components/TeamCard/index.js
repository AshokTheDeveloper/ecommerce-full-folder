// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, teamName, teamImage} = teamDetails
    return (
      <li className="team-item-container">
        <Link to={`/team-matches/${id}`} className="team-link">
          <div>
            <img src={teamImage} alt={teamName} className="team-image" />
          </div>
          <div>
            <p className="name-of-team">{teamName}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default TeamCard
