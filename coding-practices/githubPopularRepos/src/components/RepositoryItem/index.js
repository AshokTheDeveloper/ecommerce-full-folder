// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    name,
    forksCount,
    starsCount,
    issuesCount,
  } = repositoryDetails
  return (
    <li className="repository-item">
      <div className="image-container">
        <img src={avatarUrl} alt={name} className="avatar" />
      </div>
      <div className="text-container">
        <h1 className="name">{name}</h1>
        <div className="icons-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p className="stars">{starsCount} stars</p>
        </div>
        <div className="icons-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p className="forks">{forksCount} forks</p>
        </div>
        <div className="icons-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p className="issues">{issuesCount} issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
