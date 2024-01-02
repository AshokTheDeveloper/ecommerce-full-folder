// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    inputSearch: '',
  }

  onChangeInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  getSuggestion = suggestion => {
    this.setState({inputSearch: suggestion})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              value={inputSearch}
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChangeInputSearch}
            />
          </div>
          <ul className="suggestions-container">
            {filteredSuggestions.map(eachItem => (
              <SuggestionItem
                suggestionsList={eachItem}
                key={eachItem.id}
                getSuggestion={this.getSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
