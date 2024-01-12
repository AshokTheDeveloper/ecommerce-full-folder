import {Component} from 'react'

import Header from '../Header'

import SideBar from '../SideBar'

import TrendingVideoItem from '../TrendingVideoItem'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  SavedVideoTopContainer,
  SaveTopText,
  IconContainer,
  SaveIcon,
  SavedVideosContainer,
  SavedVideoItemsContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideosLogo = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        const bgColor = isDarkModeOn ? '#0f0f0f' : '#e2e8f099'
        const iconBgColor = isDarkModeOn ? ' #000000' : '#d7dfe9'
        const textColor = isDarkModeOn ? ' #f1f1f1' : ''
        return (
          <SavedVideoTopContainer bgColor={bgColor} data-testid="savedVideos">
            <IconContainer bgColor={iconBgColor}>
              <SaveIcon />
            </IconContainer>
            <SaveTopText color={textColor}>Saved Videos</SaveTopText>
          </SavedVideoTopContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderSavedVideos = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkModeOn, savedVideosList} = value
        const darkTheme = isDarkModeOn ? '#000000' : '#f1f5f9'
        return (
          <SavedVideosContainer bgColor={darkTheme}>
            {this.renderSavedVideosLogo()}
            <SavedVideoItemsContainer>
              {savedVideosList.map(eachItem => (
                <TrendingVideoItem key={eachItem.id} videoDetails={eachItem} />
              ))}
            </SavedVideoItemsContainer>
          </SavedVideosContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

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
                {this.renderSavedVideos()}
              </Container>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}
export default SavedVideos
