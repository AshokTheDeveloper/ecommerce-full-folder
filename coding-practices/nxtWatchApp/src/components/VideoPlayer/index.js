import ReactPlayer from 'react-player'

import {Container} from './styledComponents'

const VideoPlayer = props => {
  const {videoUrl, thumbnailUrl} = props
  return (
    <Container>
      <ReactPlayer
        url={videoUrl}
        controls
        poster={thumbnailUrl}
        width="100%"
        height="100%"
      />
    </Container>
  )
}

export default VideoPlayer
