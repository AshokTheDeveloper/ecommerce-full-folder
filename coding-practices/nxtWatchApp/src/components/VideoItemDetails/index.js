import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import SideBar from '../SideBar'

import VideoPlayer from '../VideoPlayer'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  VideoDetailsContainer,
  VideoTitle,
  ViewsAndLikesContainer,
  ViewsContainer,
  ViewsAndCountList,
  ViewsAndCount,
  LikesContainer,
  LikesListItem,
  Button,
  HorizontalLine,
  ProfileAndSubscribersContainer,
  Profile,
  ChannelAndSubscribersContainer,
  ChannelName,
  Subscribers,
  VideoDescription,
  LoaderContainer,
  LikeIcon,
  DislikeIcon,
  ListIcon,
  FailureContainer,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryLik,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsObj: {},
    like: false,
    dislike: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetailsObj: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLikeVideo = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  onDisLikeVideo = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  renderVideoItemDetails = () => {
    const {videoDetailsObj, like, dislike, saved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetailsObj
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn, saveVideo, savedVideosList} = value
          const onClickSaveVideo = () => {
            const isSaved = savedVideosList.some(
              eachItem => eachItem.isSaved === true,
            )

            saveVideo(videoDetailsObj)

            if (isSaved) {
              this.setState(prevState => ({saved: !prevState.saved}))
            }
          }
          const darkThem = isDarkModeOn ? '#000000' : '#f4f4f4'
          const videoTitle = isDarkModeOn ? '#d7dfe9' : '#383838'
          const viewsCountColor = isDarkModeOn ? '#94a3b8' : '#475569'
          const LineColor = isDarkModeOn ? '#64748b' : '#d7dfe9'
          const buttonText = saved ? 'Saved' : 'Save'
          const channelColor = isDarkModeOn ? '#cccccc' : '#383838'
          const descriptionColor = isDarkModeOn ? '#d7dfe9' : '#383838'
          return (
            <>
              <VideoDetailsContainer
                bgColor={darkThem}
                data-testid="videoItemDetails"
              >
                <VideoPlayer videoUrl={videoUrl} />
                <VideoTitle color={videoTitle}>{title}</VideoTitle>
                <ViewsAndLikesContainer>
                  <ViewsContainer>
                    <ViewsAndCountList>
                      <ViewsAndCount color={viewsCountColor}>
                        {viewCount} Views
                      </ViewsAndCount>
                    </ViewsAndCountList>
                    <ViewsAndCountList>
                      <ViewsAndCount color={viewsCountColor}>
                        {publishedAt}
                      </ViewsAndCount>
                    </ViewsAndCountList>
                  </ViewsContainer>
                  <LikesContainer>
                    <LikesListItem>
                      <Button
                        type="button"
                        color={isDarkModeOn}
                        onClick={this.onLikeVideo}
                        liked={like}
                      >
                        <LikeIcon />
                        Like
                      </Button>
                    </LikesListItem>
                    <LikesListItem>
                      <Button
                        type="button"
                        color={isDarkModeOn}
                        onClick={this.onDisLikeVideo}
                        liked={dislike}
                      >
                        <DislikeIcon />
                        Dislike
                      </Button>
                    </LikesListItem>
                    <LikesListItem>
                      <Button
                        type="button"
                        color={isDarkModeOn}
                        onClick={onClickSaveVideo}
                        liked={saved}
                      >
                        <ListIcon />
                        {buttonText}
                      </Button>
                    </LikesListItem>
                  </LikesContainer>
                </ViewsAndLikesContainer>
                <HorizontalLine color={LineColor} />
                <ProfileAndSubscribersContainer>
                  <Profile src={channel.profileImageUrl} alt="profile" />
                  <ChannelAndSubscribersContainer>
                    <ChannelName color={channelColor}>
                      {channel.name}
                    </ChannelName>
                    <Subscribers color={channelColor}>
                      {channel.subscriberCount} Subscribers
                    </Subscribers>
                  </ChannelAndSubscribersContainer>
                </ProfileAndSubscribersContainer>
                <VideoDescription color={descriptionColor}>
                  {description}
                </VideoDescription>
              </VideoDetailsContainer>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkModeOn ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderFailureView = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const themeImage = isDarkModeOn
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const headingColor = isDarkModeOn ? '#ffffff' : '#000000'
        const descriptionColor = isDarkModeOn ? '#cbd5e1' : '#383838'
        return (
          <FailureContainer>
            <FailureImage src={themeImage} alt="failure image" />
            <FailureText color={headingColor}>
              Oops! Something Went Wrong
            </FailureText>
            <FailureDescription color={descriptionColor}>
              We are having some trouble to complete your request Please try
              again
            </FailureDescription>
            <RetryLik to="/">
              <RetryButton>Retry</RetryButton>
            </RetryLik>
          </FailureContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          const darkTheme = isDarkModeOn ? '#212121' : '#ffffff'
          return (
            <>
              <Header />
              <Container bgColor={darkTheme}>
                <SideBar />
                {this.renderResultView()}
              </Container>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default VideoItemDetails
