import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import PremiumPlan from '../PremiumPlan'
import Videos from '../Videos'
import WatchAppContext from '../../context/WatchAppContext'
import {Container, HomeContentSection} from './styledComponents'

class Home extends Component {
  renderPremiumSubscription = () => <PremiumPlan />

  renderVideos = () => <Videos />

  render() {
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          const themeColor = isDarkModeOn ? '#181818' : '#f4f4f4'
          return (
            <>
              <Header />
              <Container bgColor={themeColor} data-testid="home">
                <SideBar />
                <HomeContentSection bgColor={isDarkModeOn}>
                  {this.renderPremiumSubscription()}
                  {this.renderVideos()}
                </HomeContentSection>
              </Container>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Home
