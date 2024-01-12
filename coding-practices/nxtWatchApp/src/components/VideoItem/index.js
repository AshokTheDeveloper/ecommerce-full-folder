import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  Thumbnail,
  ChanelDetailsContainer,
  TextContainer,
  Title,
  ChannelProfileIcon,
  ChannelName,
  ViewsTimeContainer,
  ViewCount,
  BgContainer,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <BgContainer>
            <Link to={`/videos/${id}`} className="links">
              <Container>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <ChanelDetailsContainer>
                  <ChannelProfileIcon
                    src={channel.profile_image_url}
                    alt="channel logo"
                  />
                  <TextContainer>
                    <Title color={isDarkModeOn}>{title}</Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <ViewsTimeContainer>
                      <ViewCount>{viewCount} Views</ViewCount>
                      <BsDot className="dot" />
                      <ViewCount>{publishedAt}</ViewCount>
                    </ViewsTimeContainer>
                  </TextContainer>
                </ChanelDetailsContainer>
              </Container>
            </Link>
          </BgContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default VideoItem
