import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRouter from './components/ProtectedRouter'
import Login from './components/Login'
import Jobs from './components/Jobs'
import Home from './components/Home'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRouter exact path="/" component={Home} />
      <ProtectedRouter exact path="/jobs" component={Jobs} />
      <ProtectedRouter exact path="/jobs/:id" component={JobItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
