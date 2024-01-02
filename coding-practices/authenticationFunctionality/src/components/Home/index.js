// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <div className="container">
    <Header />
    <div className="home-container">
      <h1 className="heading">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
