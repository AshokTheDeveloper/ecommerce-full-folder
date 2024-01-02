// Write your code here
import {Component} from 'react'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
