// Write your JS code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      title: data.title,
      topic: data.topic,
    }
    console.log(updatedData)
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, imageUrl, avatarUrl, content, title} = blogItemDetails
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              data-testid="loader"
              color="#00BFFF"
              width={50}
              height={50}
            />
          </div>
        ) : (
          <div className="details-container">
            <h1 className="details-title">{title}</h1>
            <div className="author-profile">
              <img src={avatarUrl} alt={author} className="avatar-image" />
              <p className="author">{author}</p>
            </div>
            <div className="image-container">
              <img src={imageUrl} alt={title} className="content-image" />
            </div>
            <div className="content-container">
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
