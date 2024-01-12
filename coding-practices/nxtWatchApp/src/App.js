import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import WatchAppContext from './context/WatchAppContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkModeOn: false,
    activeTab: 'Home',
    savedVideosList: [],
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDarkModeOn: !prevState.isDarkModeOn}))
  }

  onChangeTab = tab => {
    this.setState({activeTab: tab})
  }

  onClickToSaveVideo = product => {
    const {savedVideosList} = this.state
    const videoThere = savedVideosList.some(
      eachItem => eachItem.id === product.id,
    )

    if (videoThere === false) {
      this.setState(prevState => ({
        savedVideosList: [
          ...prevState.savedVideosList,
          {...product, isSaved: true},
        ],
      }))
    }
  }

  render() {
    const {isDarkModeOn, activeTab, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <WatchAppContext.Provider
        value={{
          isDarkModeOn,
          activeTab,
          toggleDarkMode: this.toggleDarkMode,
          changeTab: this.onChangeTab,
          savedVideosList,
          saveVideo: this.onClickToSaveVideo,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </WatchAppContext.Provider>
    )
  }
}

export default App
