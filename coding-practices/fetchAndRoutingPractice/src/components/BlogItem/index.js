// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, imageUrl, avatarUrl, title, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="blog-item-container">
        <img src={imageUrl} alt={topic} className="blog-image" />
        <div className="title-topic-profile-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-profile-container">
            <img src={avatarUrl} alt={author} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
