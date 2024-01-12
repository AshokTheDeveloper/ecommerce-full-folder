import React from 'react'

const WatchAppContext = React.createContext({
  isDarkModeOn: false,
  toggleDarkMode: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideosList: [],
  saveVideo: () => {},
})

export default WatchAppContext
