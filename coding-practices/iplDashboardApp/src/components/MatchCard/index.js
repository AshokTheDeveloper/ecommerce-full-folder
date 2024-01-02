// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
