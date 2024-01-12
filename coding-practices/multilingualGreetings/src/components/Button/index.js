import {ButtonContainer, LanguageButton} from './styledComponents'

const Button = props => {
  const {details, selectLanguage, isTrue} = props
  const {buttonText, imageAltText} = details
  const onSelectLanguage = () => {
    selectLanguage(imageAltText)
  }

  const buttonFill = isTrue ? '#db1c48' : '#ffffff'
  const color = isTrue ? '#ffffff' : '#1e293b'

  return (
    <ButtonContainer>
      <LanguageButton
        type="button"
        onClick={onSelectLanguage}
        bgColor={buttonFill}
        color={color}
      >
        {buttonText}
      </LanguageButton>
    </ButtonContainer>
  )
}

export default Button
