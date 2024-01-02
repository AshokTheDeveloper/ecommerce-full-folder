// Write your code here
import './index.css'

const CommentItem = props => {
  const {cmtList, onClickLikeButton, deleteComment} = props
  const {name, comment, createdTime, isLiked, id, backgroundColor} = cmtList

  const onLikeButton = () => {
    onClickLikeButton(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const likedIcon = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextColor = isLiked ? 'liked-color' : 'un-liked-color'

  return (
    <li className="comments-item-bg-container">
      <div className="user-name-and-time-container">
        <p className={`profile-picture ${backgroundColor}`}>{name[0]}</p>
        <p className="user-name">{name}</p>
        <p className="created-time">{createdTime}</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="like-and-delete-container">
        <div className="like-icon-container">
          <button type="button" className="like-button" onClick={onLikeButton}>
            <img src={likedIcon} alt="like" className="liked-icon" />
            <p className={`like-text ${likeTextColor}`}>Like</p>
          </button>
        </div>
        <div className="delete-icon-container">
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={onDeleteComment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="line-separator" />
    </li>
  )
}

export default CommentItem
