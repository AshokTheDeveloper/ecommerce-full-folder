// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredDestinationsList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-container">
        <div className="heading-and-input-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-icon-container">
            <input
              type="search"
              className="input-field"
              placeholder="Search"
              onChange={this.onChangeInputSearch}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon"
            />
          </div>
          <ul className="search-items-container">
            {filteredDestinationsList.map(eachItem => (
              <DestinationItem destinationsList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
