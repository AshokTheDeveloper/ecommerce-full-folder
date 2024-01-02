// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  return (
    <li className="project-container">
      <img
        src={imageUrl}
        alt={`project ${projectTitle}`}
        className="project-image"
      />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calender-icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </li>
  )
}

export default ProjectTimelineCard
