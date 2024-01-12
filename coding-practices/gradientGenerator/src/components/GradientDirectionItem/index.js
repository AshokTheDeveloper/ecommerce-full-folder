// Write your code here
import {OptionItem, OptionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientOption, onChangeDirection, isTrue} = props
  const {directionId, value, displayText} = gradientOption

  const changeDirection = () => {
    onChangeDirection(value, directionId)
  }

  return (
    <OptionItem>
      <OptionButton type="button" onClick={changeDirection} isTrue={isTrue}>
        {displayText}
      </OptionButton>
    </OptionItem>
  )
}

export default GradientDirectionItem
