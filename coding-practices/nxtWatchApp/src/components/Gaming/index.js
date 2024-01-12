import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import SideBar from '../SideBar'

import GamingVideoItem from '../GameVideoItem'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  LoaderContainer,
  GamingVideosContainer,
  GamingTopContainer,
  IconContainer,
  GameIcon,
  GameTopText,
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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGameLogo = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const bgColor = isDarkModeOn ? '#181818' : '#e2e8f099'
        const iconBgColor = isDarkModeOn ? ' #000000' : '#d7dfe9'
        const textColor = isDarkModeOn ? ' #f1f1f1' : ''
        return (
          <GamingTopContainer bgColor={bgColor}>
            <IconContainer bgColor={iconBgColor}>
              <GameIcon />
            </IconContainer>
            <GameTopText color={textColor}>Gaming</GameTopText>
          </GamingTopContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideosList} = this.state
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          const darkTheme = isDarkModeOn ? '#000000' : '#f1f5f9'
          return (
            <GamingVideosContainer bgColor={darkTheme}>
              {this.renderGameLogo()}
              {gamingVideosList.map(eachItem => (
                <GamingVideoItem key={eachItem.id} videoDetails={eachItem} />
              ))}
            </GamingVideosContainer>
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
        const darkTheme = isDarkModeOn ? '#000000' : '#f1f5f9'
        return (
          <FailureContainer bgColor={darkTheme}>
            <FailureImage src={themeImage} alt="failure image" />
            <FailureText color={headingColor}>
              Oops! Something Went Wrong
            </FailureText>
            <FailureDescription color={descriptionColor}>
              We are having some trouble to complete your request Please try
              again
            </FailureDescription>
            <RetryLik to="/gaming">
              <RetryButton>Retry</RetryButton>
            </RetryLik>
          </FailureContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderActiveView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
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
          const darkTheme = isDarkModeOn ? '#231f20' : '#ffffff'
          return (
            <>
              <Header />
              <Container bgColor={darkTheme}>
                <SideBar />
                {this.renderActiveView()}
              </Container>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Gaming
