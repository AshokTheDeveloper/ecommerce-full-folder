import {Component} from 'react'

import CountryItem from '../CountryItem'

import Country from '../Country'

import {
  Container,
  CountriesHeading,
  CountriesListContainer,
  VisitedCountriesContainer,
  VisitedCountryItemContainer,
  NoCountriesContainer,
  NoCountryText,
} from './styledComponents'

class VisitCountries extends Component {
  constructor(props) {
    super(props)
    this.state = {countriesList: props.countriesList}
  }

  visited = id => {
    const {countriesList} = this.state
    const visitedCountries = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const updated = {...eachItem, isVisited: true}
        return updated
      }
      return eachItem
    })
    this.setState({countriesList: visitedCountries})
  }

  removeCountry = id => {
    const {countriesList} = this.state
    const visitedCountries = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const updated = {...eachItem, isVisited: false}
        return updated
      }
      return eachItem
    })
    this.setState({countriesList: visitedCountries})
  }

  renderCountriesList = () => {
    const {countriesList} = this.state
    return (
      <CountriesListContainer>
        {countriesList.map(eachItem => (
          <CountryItem
            key={eachItem.id}
            countryDetails={eachItem}
            visited={this.visited}
          />
        ))}
      </CountriesListContainer>
    )
  }

  renderVisitedCountries = () => {
    const {countriesList} = this.state
    const updatedList = countriesList.filter(
      eachCountry => eachCountry.isVisited === true,
    )
    const numberOfVisitedCountries = updatedList.length
    return numberOfVisitedCountries > 0 ? (
      <VisitedCountriesContainer>
        <CountriesHeading>Visited Countries</CountriesHeading>
        <VisitedCountryItemContainer>
          {updatedList.map(eachItem => (
            <Country
              key={eachItem.id}
              countryDetails={eachItem}
              removeCountry={this.removeCountry}
            />
          ))}
        </VisitedCountryItemContainer>
      </VisitedCountriesContainer>
    ) : (
      this.renderNoCountriesList()
    )
  }

  renderNoCountriesList = () => (
    <NoCountriesContainer>
      <NoCountryText>No Countries Visited Yet</NoCountryText>
    </NoCountriesContainer>
  )

  render() {
    const {countriesList} = this.state
    console.log(countriesList)
    return (
      <Container>
        <CountriesHeading>Countries</CountriesHeading>
        {this.renderCountriesList()}
        {this.renderVisitedCountries()}
      </Container>
    )
  }
}

export default VisitCountries
