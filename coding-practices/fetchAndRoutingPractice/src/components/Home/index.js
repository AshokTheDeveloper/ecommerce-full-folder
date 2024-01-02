import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container" data-textid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
