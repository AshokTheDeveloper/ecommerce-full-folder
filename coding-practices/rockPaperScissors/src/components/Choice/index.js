import {ChoiceContainer, ChoiceImage, ChoiceButton} from './styledComponents'

const Choice = props => {
  const {choicesList, onChooseOption} = props
  const {id, imageUrl} = choicesList

  const chooseOption = () => {
    onChooseOption(id, imageUrl)
  }
  const buttonTestText = `${id.toLowerCase()}Button`
  return (
    <ChoiceContainer>
      <ChoiceButton
        type="button"
        onClick={chooseOption}
        data-testid={buttonTestText}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceContainer>
  )
}

export default Choice
