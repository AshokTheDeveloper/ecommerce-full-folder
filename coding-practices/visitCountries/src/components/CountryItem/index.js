import {Container, CountryName, Button, VisitedText} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, visited} = props
  const {name, id, isVisited} = countryDetails

  const onClickVisit = () => {
    visited(id)
  }

  return (
    <Container>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <Button type="button" onClick={onClickVisit}>
          Visit
        </Button>
      )}
    </Container>
  )
}

export default CountryItem
