import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Counter from '../Counter'

import {
  Container,
  ResultContainer,
  ResultText,
  InputBgContainer,
  Heading,
  Form,
  Input,
  AddButton,
  ImageContainer,
  Image,
  ListItems,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    inputsList: [],
  }

  onInputChange = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSave = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.length !== 0) {
      const newInput = {
        id: uuidv4(),
        input: userInput,
      }
      this.setState(prevState => ({
        inputsList: [...prevState.inputsList, newInput],
        userInput: '',
      }))
    }
  }

  renderResult = () => {
    const {inputsList} = this.state
    const lengthOfList = inputsList.length
    return (
      <>
        {lengthOfList === 0
          ? this.renderNoUserInputsView()
          : this.renderCharacterCount()}
      </>
    )
  }

  renderCharacterCount = () => {
    const {inputsList} = this.state
    return (
      <ListItems>
        {inputsList.map(eachItem => (
          <Counter key={eachItem.id} inputDetails={eachItem} />
        ))}
      </ListItems>
    )
  }

  renderLeftContainer = () => (
    <ResultContainer>
      <ResultText>Count the characters like a Boss...</ResultText>
      {this.renderResult()}
    </ResultContainer>
  )

  renderRightContainer = () => {
    const {userInput} = this.state
    return (
      <InputBgContainer>
        <Heading>Character Counter</Heading>
        <Form onSubmit={this.onClickSave}>
          <Input
            type="text"
            placeholder="Enter the Characters here"
            onChange={this.onInputChange}
            value={userInput}
          />
          <AddButton type="Submit">Add</AddButton>
        </Form>
      </InputBgContainer>
    )
  }

  renderNoUserInputsView = () => (
    <ImageContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </ImageContainer>
  )

  render() {
    const {inputsList} = this.state
    console.log(inputsList)
    return (
      <Container>
        {this.renderLeftContainer()} {this.renderRightContainer()}
      </Container>
    )
  }
}

export default CharacterCounter
