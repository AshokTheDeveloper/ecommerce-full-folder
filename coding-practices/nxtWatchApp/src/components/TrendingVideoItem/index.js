import WatchAppContext from '../../context/WatchAppContext'
import {
  Container,
  TrendingThumbnail,
  TrendTextContainer,
  Title,
  ChannelName,
  ViewsCountContainer,
  ViewAndTime,
  TrendingLink,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const titleColor = isDarkModeOn ? '#cccccc' : '#383838'
        const viewsColor = isDarkModeOn ? '#94a3b8' : '#606060'
        return (
          <TrendingLink to={`/videos/${id}`}>
            <Container>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendTextContainer>
                <Title color={titleColor}>{title}</Title>
                <ChannelName color={viewsColor}>{channel.name}</ChannelName>
                <ViewsCountContainer>
                  <ViewAndTime color={viewsColor}>
                    {viewCount} Views
                  </ViewAndTime>
                  <ViewAndTime color={viewsColor}>{publishedAt}</ViewAndTime>
                </ViewsCountContainer>
              </TrendTextContainer>
            </Container>
          </TrendingLink>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default TrendingVideoItem
