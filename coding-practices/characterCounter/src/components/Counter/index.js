import {Container, Text} from './styledComponents'

const Counter = props => {
  const {inputDetails} = props
  const {input} = inputDetails
  const lengthOfCharacters = input.length
  return (
    <Container>
      <Text>
        {input}: {lengthOfCharacters}
      </Text>
    </Container>
  )
}

export default Counter
