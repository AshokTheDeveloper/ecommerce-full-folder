import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  GameThumbnail,
  GameTitle,
  WatchStatus,
  GameVideoLink,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const titleColor = isDarkModeOn ? '#ffffff' : '#313131'
        const viewsColor = isDarkModeOn ? '#94a3b8' : '#616e7c'
        return (
          <Container>
            <GameVideoLink to={`/videos/${id}`}>
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={titleColor}>{title}</GameTitle>
              <WatchStatus color={viewsColor}>
                {viewCount} Watching Worldwide
              </WatchStatus>
            </GameVideoLink>
          </Container>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default GamingVideoItem
