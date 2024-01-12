import WatchAppContext from '../../context/WatchAppContext'
import {
  Container,
  ContactText,
  SocialMediaContainer,
  SocialIcon,
  SocialDescription,
} from './styledComponents'

const Contact = () => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkModeOn} = value
      return (
        <Container>
          <ContactText color={isDarkModeOn}>CONTACT US</ContactText>
          <SocialMediaContainer>
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialMediaContainer>
          <SocialDescription color={isDarkModeOn}>
            Enjoy! Now to see your channels and recommendations!
          </SocialDescription>
        </Container>
      )
    }}
  </WatchAppContext.Consumer>
)

export default Contact
