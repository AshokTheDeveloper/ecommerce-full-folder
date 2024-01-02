// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`margin ${className}`}>
      <ul>
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </ul>
    </li>
  )
}

export default BannerCardItem
