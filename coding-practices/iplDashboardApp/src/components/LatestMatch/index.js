// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latest-match">
      <div className="responsive-container">
        <div className="left-text-container">
          <p className="competing-team">{latestMatchDetails.competingTeam}</p>
          <p className="date">{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <div className="competing-logo-container">
          <img
            src={latestMatchDetails.competingTeamLogo}
            alt={`latest match ${latestMatchDetails.competingTeam}`}
            className="competing-logo"
          />
        </div>
      </div>
      <div className="right-text-container">
        <p className="right-text head">First Innings</p>
        <p className="right-text">{latestMatchDetails.firstInnings}</p>
        <p className="right-text head">Second Innings</p>
        <p className="right-text">{latestMatchDetails.secondInnings}</p>
        <p className="right-text head">Man of The Match</p>
        <p className="right-text">{latestMatchDetails.manOfTheMatch}</p>
        <p className="right-text head">Umpires</p>
        <p className="right-text">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
