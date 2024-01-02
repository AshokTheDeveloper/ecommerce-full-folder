// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {CourseTimelineDetails} = props
  const {courseTitle, description, duration, tagsList} = CourseTimelineDetails
  return (
    <li className="course-item-container">
      <div className="title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <p className="tag" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </li>
  )
}

export default CourseTimelineCard
