import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    userInput: '',
    comment: '',
    commentsList: [],
    commentsCount: 0,
  }

  submitComment = event => {
    event.preventDefault()

    const {userInput, comment} = this.state

    const initialBackgroundColor = `${
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: userInput,
      comment,
      createdTime: formatDistanceToNow(new Date()),
      isLiked: false,
      backgroundColor: initialBackgroundColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      userInput: '',
      comment: '',
    }))
    this.setState(prevState => ({commentsCount: prevState.commentsCount + 1}))
  }

  onUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onUserComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onClickLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({commentsCount: prevState.commentsCount - 1}))
    const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredList})
  }

  render() {
    const {userInput, comment, commentsList, commentsCount} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="comments-bg-container">
          <div className="input-container">
            <p className="statement">Say something about 4.0 technologies</p>
            <form
              className="from-input-container"
              onSubmit={this.submitComment}
            >
              <input
                value={userInput}
                onChange={this.onUserInput}
                type="text"
                className="input-field search"
                placeholder="Your Name"
              />
              <textarea
                value={comment}
                onChange={this.onUserComment}
                className="input-field comments"
                cols="49"
                rows="6"
                placeholder="Your Comment"
              >
                {}
              </textarea>
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="comments-count-container">
          <p className="comments-count">{commentsCount}</p>
          <p className="comments-text">Comments</p>
        </div>
        <ul className="comments-container">
          {commentsList.map(eachObj => (
            <CommentItem
              key={eachObj.id}
              cmtList={eachObj}
              onClickLikeButton={this.onClickLikeButton}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
