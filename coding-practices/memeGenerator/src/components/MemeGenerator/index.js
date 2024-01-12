import {Component} from 'react'
import {
  Container,
  Heading,
  MemeContainer,
  FormElement,
  InputContainer,
  InputElement,
  LabelText,
  SelectElement,
  OptionElement,
  SubmitButton,
  DisplayMemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topInput: '',
    bottomInput: '',
    // activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    activeFontSize: 8,
    memeObj: {},
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {imageInput, topInput, bottomInput} = this.state
    const meme = {
      image: imageInput,
      topText: topInput,
      bottomText: bottomInput,
    }
    this.setState({memeObj: meme})
  }

  onChangeImageInput = event => {
    this.setState({imageInput: event.target.value})
  }

  onChangeTopInput = event => {
    this.setState({topInput: event.target.value})
  }

  onChangeBottomInput = event => {
    this.setState({bottomInput: event.target.value})
  }

  onChangeFontSizeInput = event => {
    this.setState({activeFontSize: event.target.value})
  }

  render() {
    const {
      imageInput,
      topInput,
      bottomInput,
      activeFontSize,
      memeObj,
    } = this.state
    const fontSized = parseInt(activeFontSize)
    console.log(typeof fontSized)
    return (
      <>
        <Heading>Meme Generator</Heading>
        <Container>
          <MemeContainer>
            <FormElement onSubmit={this.onFormSubmit}>
              <InputContainer>
                <LabelText htmlFor="imageUrl">Image URL</LabelText>
                <InputElement
                  id="imageUrl"
                  type="text"
                  placeholder="Enter the Image URL"
                  value={imageInput}
                  onChange={this.onChangeImageInput}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="topText">Top Text</LabelText>
                <InputElement
                  id="topText"
                  type="text"
                  placeholder="Enter the Image URL"
                  value={topInput}
                  onChange={this.onChangeTopInput}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="bottomText">Bottom Text</LabelText>
                <InputElement
                  id="bottomText"
                  type="text"
                  placeholder="Enter the Image URL"
                  value={bottomInput}
                  onChange={this.onChangeBottomInput}
                />
              </InputContainer>
              <InputContainer>
                <LabelText htmlFor="fontSize">Font Size</LabelText>
                <SelectElement
                  value={activeFontSize}
                  onChange={this.onChangeFontSizeInput}
                  id="fontSize"
                >
                  {fontSizesOptionsList.map(eachOption => (
                    <OptionElement key={eachOption.optionId}>
                      {eachOption.displayText}
                    </OptionElement>
                  ))}
                </SelectElement>
              </InputContainer>
              <SubmitButton>Generate</SubmitButton>
            </FormElement>
          </MemeContainer>
          <DisplayMemeContainer bgImage={memeObj.image} data-testid="meme">
            <MemeText fontSize={fontSized}>{memeObj.topText}</MemeText>
            <MemeText fontSize={fontSized}>{memeObj.bottomText}</MemeText>
          </DisplayMemeContainer>
        </Container>
      </>
    )
  }
}

export default MemeGenerator
