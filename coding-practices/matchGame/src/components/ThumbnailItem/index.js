import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnail} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  return (
    <li className="thumbnail-item-container">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
