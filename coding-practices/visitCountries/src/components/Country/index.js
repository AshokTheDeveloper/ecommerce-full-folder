import {
  Container,
  ButtonContainer,
  CountryImage,
  CountryName,
  RemoveButton,
} from './styledComponents'

const Country = props => {
  const {countryDetails, removeCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <Container>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <ButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </ButtonContainer>
    </Container>
  )
}

export default Country
