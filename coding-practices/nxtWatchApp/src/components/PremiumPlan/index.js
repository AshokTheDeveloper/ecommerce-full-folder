import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {
  Container,
  TextContainer,
  PremiumLogo,
  PremiumText,
  PremiumButton,
  CloseButton,
} from './styledComponents'
import './index.css'

class PremiumPlan extends Component {
  state = {
    bannerDisplay: 'flex',
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  render() {
    const {bannerDisplay} = this.state
    const display = bannerDisplay === 'flex' ? 'flex' : 'none'
    return (
      <Container display={display} data-testid="banner">
        <TextContainer>
          <PremiumLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumText>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PremiumText>
          <PremiumButton>GET IT NOW</PremiumButton>
        </TextContainer>
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.onCloseBanner}
        >
          <IoMdClose className="close-icon" />
        </CloseButton>
      </Container>
    )
  }
}

export default PremiumPlan
