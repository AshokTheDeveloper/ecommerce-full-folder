import {Component} from 'react'
import {
  Container,
  Heading,
  GradientOptionContainer,
  Option,
  ColorPickerContainer,
  InputContainer,
  SecondaryDescription,
  InputOption,
  ColorInput,
  SubmitButton,
  FormElement,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    bgGradient: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeDirectionId: gradientDirectionsList[0].directionId,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fromColor, toColor, gradientDirection} = this.state
    this.setState({
      bgGradient: `to ${gradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  changeDirection = (directionValue, directionId) => {
    this.setState({
      gradientDirection: directionValue,
      activeDirectionId: directionId,
    })
  }

  renderGradientDirectionOptions = () => {
    const {activeDirectionId} = this.state
    return (
      <>
        <Option>Choose Direction</Option>
        <GradientOptionContainer>
          {gradientDirectionsList.map(eachOption => (
            <GradientDirectionItem
              key={eachOption.directionId}
              gradientOption={eachOption}
              onChangeDirection={this.changeDirection}
              isTrue={eachOption.directionId === activeDirectionId}
            />
          ))}
        </GradientOptionContainer>
      </>
    )
  }

  renderColorPicker = () => {
    const {fromColor, toColor} = this.state
    return (
      <>
        <ColorPickerContainer>
          <Option>Pick the Colors</Option>
          <InputContainer>
            <InputOption>
              <SecondaryDescription>{fromColor}</SecondaryDescription>
              <ColorInput
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </InputOption>
            <InputOption>
              <SecondaryDescription>{toColor}</SecondaryDescription>
              <ColorInput
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </InputOption>
          </InputContainer>
          <SubmitButton type="submit">Generate</SubmitButton>
        </ColorPickerContainer>
      </>
    )
  }

  render() {
    const {bgGradient} = this.state
    return (
      <>
        <Container gradientValue={bgGradient} data-testid="gradientGenerator">
          <Heading>Generate a CSS Color Gradient</Heading>
          <FormElement onSubmit={this.onSubmitForm}>
            {this.renderGradientDirectionOptions()}
            {this.renderColorPicker()}
          </FormElement>
        </Container>
      </>
    )
  }
}

export default GradientGenerator
