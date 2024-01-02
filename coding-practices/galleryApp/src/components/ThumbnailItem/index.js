// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickChangeImage, isTrue} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = imageDetails

  const onChangeImage = () => {
    onClickChangeImage(imageUrl, imageAltText)
  }

  const classNameOpacity = isTrue ? 'opacity' : ''

  return (
    <>
      <li className={`thumbnail-item-container ${classNameOpacity}`}>
        <button className="button" type="button" onClick={onChangeImage}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumb-nail-image"
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
