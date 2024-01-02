// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} CourseTimelineDetails={item} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="timeline-container">
        <div className="text-container">
          <h3 className="heading">MY JOURNEY OF CCBP 4.0</h3>
        </div>
        <div className="timeline">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: 'white',
            }}
          >
            {timelineItemsList.map(eachItem =>
              this.renderTimelineCard(eachItem),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
