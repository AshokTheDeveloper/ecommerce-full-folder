import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'TE',
  changeLanguage: () => {},
})

export default LanguageContext
