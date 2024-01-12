import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import VideoItem from '../VideoItem'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  VideosContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryLik,
  RetryButton,
  SearchIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Videos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: eachItem.channel,
        publishedAt: formatDistanceToNow(new Date(eachItem.published_at)),
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    this.getVideos()
  }

  renderSearchBar = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const {searchInput} = this.state
        const iconColor = isDarkModeOn ? '#909090' : '#424242'
        const buttonBgColor = isDarkModeOn ? '#383838' : '#f1f5f9'
        return (
          <SearchBarContainer>
            <SearchInput
              type="search"
              placeholder="Search"
              color={isDarkModeOn}
              onChange={this.onInputChange}
              value={searchInput}
            />
            <SearchButton
              type="button"
              data-testid="searchButton"
              onClick={this.onSearch}
              bgColor={buttonBgColor}
            >
              <SearchIcon color={iconColor} />
            </SearchButton>
          </SearchBarContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderVideos = () => {
    const {videosList} = this.state
    return (
      <>
        {this.renderSearchBar()}
        {videosList.length > 0 ? (
          <VideosContainer>
            {videosList.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosContainer>
        ) : (
          this.renderNoSearchResultFoundView()
        )}
      </>
    )
  }

  renderNoSearchResultFoundView = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const headingColor = isDarkModeOn ? '#ffffff' : '#000000'
        const descriptionColor = isDarkModeOn ? '#cbd5e1' : '#383838'
        return (
          <>
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureText color={headingColor}>
                No Search results found
              </FailureText>
              <FailureDescription color={descriptionColor}>
                Try different key words or remove search filters
              </FailureDescription>
              <RetryLik to="/">
                <RetryButton>Retry</RetryButton>
              </RetryLik>
            </FailureContainer>
          </>
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

  renderActiveView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
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
          return (
            <Container bgColor={isDarkModeOn}>
              {this.renderActiveView()}
            </Container>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Videos
