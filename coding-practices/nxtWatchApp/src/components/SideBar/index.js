import {Link} from 'react-router-dom'
import {Component} from 'react'

import {FaHotjar, FaGamepad} from 'react-icons/fa'

import {HiHome} from 'react-icons/hi'
import {RiPlayListAddFill} from 'react-icons/ri'
import WatchAppContext from '../../context/WatchAppContext'
import Contact from '../Contact'
import {
  Container,
  Feature,
  FeatureName,
  IconContainer,
  FeatureButton,
  FeaturesContainer,
  ContactContainer,
} from './styledComponents'

import './index.css'

const tabs = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'savedVideos',
}

class SideBar extends Component {
  render() {
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkModeOn, activeTab, changeTab} = value
          const renderHome = () => {
            changeTab(tabs.home)
          }

          const renderTrending = () => {
            changeTab(tabs.trending)
          }

          const renderGaming = () => {
            changeTab(tabs.gaming)
          }

          const renderSavedVideos = () => {
            changeTab(tabs.savedVideos)
          }
          return (
            <Container bgColor={isDarkModeOn}>
              <FeaturesContainer>
                <Feature>
                  <Link to="/" className="nav-links">
                    <FeatureButton type="button" onClick={renderHome}>
                      <IconContainer bgColor={isDarkModeOn}>
                        <HiHome color={activeTab === 'Home' ? '#ff0b37' : ''} />
                      </IconContainer>
                      <FeatureName colorTwo={isDarkModeOn}>
                        <p>Home</p>
                      </FeatureName>
                    </FeatureButton>
                  </Link>
                </Feature>
                <Feature>
                  <Link to="/trending" className="nav-links">
                    <FeatureButton type="button" onClick={renderTrending}>
                      <IconContainer bgColor={isDarkModeOn}>
                        <FaHotjar
                          color={activeTab === 'Trending' ? '#ff0b37' : ''}
                        />
                      </IconContainer>
                      <FeatureName colorTwo={isDarkModeOn}>
                        <p>Trending</p>
                      </FeatureName>
                    </FeatureButton>
                  </Link>
                </Feature>
                <Feature>
                  <Link to="/gaming" className="nav-links">
                    <FeatureButton type="button" onClick={renderGaming}>
                      <IconContainer bgColor={isDarkModeOn}>
                        <FaGamepad
                          color={activeTab === 'Gaming' ? '#ff0b37' : ''}
                        />
                      </IconContainer>
                      <FeatureName colorTwo={isDarkModeOn}>
                        <p>Gaming</p>
                      </FeatureName>
                    </FeatureButton>
                  </Link>
                </Feature>
                <Feature>
                  <Link to="/saved-videos" className="nav-links">
                    <FeatureButton type="button" onClick={renderSavedVideos}>
                      <IconContainer bgColor={isDarkModeOn}>
                        <RiPlayListAddFill
                          color={activeTab === 'savedVideos' ? '#ff0b37' : ''}
                        />
                      </IconContainer>
                      <FeatureName colorTwo={isDarkModeOn}>
                        <p>Saved videos</p>
                      </FeatureName>
                    </FeatureButton>
                  </Link>
                </Feature>
              </FeaturesContainer>
              <ContactContainer>
                <Contact />
              </ContactContainer>
            </Container>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default SideBar
