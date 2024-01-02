import './index.css'
import {Component} from 'react'
import CapitalCityItem from '../CapitalCityItem'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  onChangeCapitalsList = event => {
    const valueId = event.target.value
    countryAndCapitalsList.map(eachItem =>
      eachItem.id === valueId ? this.setState({country: eachItem.country}) : '',
    )
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="capitals-bg-container">
          <h1 className="countries-heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="capitals"
              id="capitalCities"
              onChange={this.onChangeCapitalsList}
            >
              {countryAndCapitalsList.map(eachItem => (
                <CapitalCityItem
                  capitalsDetails={eachItem}
                  key={eachItem.id}
                  onChangeCapital={this.onChangeCapitalsList}
                />
              ))}
            </select>
            <label htmlFor="capitalCities" className="label">
              is capital of which country?
            </label>
            <p className="country-name">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
