import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const statusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
}

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    repoList: [],
    isLoading: false,
    status: statusConstants.success,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    this.setState({isLoading: true})
    const {activeId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
      issuesCount: eachItem.issues_count,
    }))
    if (response.ok) {
      this.setState({repoList: updatedData, isLoading: false})
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  getLanguageId = id => {
    this.setState({activeId: id}, this.getRepositories)
  }

  renderLanguageFilterItem = () => {
    const {activeId} = this.state
    return (
      <ul className="language-filter-list-container">
        {languageFiltersData.map(eachItem => (
          <LanguageFilterItem
            key={eachItem.id}
            languageFiltersDetails={eachItem}
            getLanguageId={this.getLanguageId}
            isTrue={eachItem.id === activeId}
          />
        ))}
      </ul>
    )
  }

  renderRepositoryItem = () => {
    const {repoList} = this.state
    return (
      <ul className="repo-list-container">
        {repoList.map(eachItem => (
          <RepositoryItem key={eachItem.id} repositoryDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-text">Something Went Wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderResultView = () => {
    const {status, isLoading} = this.state
    if (status === statusConstants.success) {
      return isLoading ? this.renderLoader() : this.renderRepositoryItem()
    }
    return this.renderFailureView()
  }

  render() {
    const {repoList} = this.state
    console.log(repoList)
    return (
      <div className="repo-bg-container">
        <h1 className="main-heading">Popular</h1>
        {this.renderLanguageFilterItem()}
        {this.renderResultView()}
      </div>
    )
  }
}

export default GithubPopularRepos
