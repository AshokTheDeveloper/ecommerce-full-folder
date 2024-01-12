import Header from '../Header'

import SideBar from '../SideBar'

import WatchAppContext from '../../context/WatchAppContext'

import {
  Container,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  Description,
} from './styledComponents'

// https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png
// https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png

const NotFound = () => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkModeOn} = value
      const darkTheme = isDarkModeOn ? '#000000' : '#f1f5f9'

      const imageOnMode = isDarkModeOn
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      const headingColor = isDarkModeOn ? '#ffffff' : '#000000'

      const descriptionColor = isDarkModeOn ? '#64748b' : '#383838'

      return (
        <>
          <Header />
          <Container bgColor={darkTheme}>
            <SideBar />
            <NotFoundContainer>
              <NotFoundImage src={imageOnMode} alt="not found" />
              <NotFoundHeading color={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <Description color={descriptionColor}>
                We are sorry, the page you requested could not be found.
              </Description>
            </NotFoundContainer>
          </Container>
        </>
      )
    }}
  </WatchAppContext.Consumer>
)

export default NotFound
