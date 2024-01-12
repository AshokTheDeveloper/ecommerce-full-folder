import {Component} from 'react'

import {
  Container,
  InputAndTextContainer,
  Text,
  InputContainer,
  Input,
  SaveButton,
  EditText,
} from './styledComponents'

class EditableText extends Component {
  state = {
    isSaved: false,
    textInput: '',
  }

  onInputChange = event => {
    this.setState({textInput: event.target.value})
  }

  onSaveButtonClicked = () => {
    this.setState({isSaved: true})
  }

  onEditButtonClicked = () => {
    this.setState({isSaved: false})
  }

  renderInput = () => {
    const {textInput} = this.state
    return (
      <InputAndTextContainer>
        <Text>Editable Text Input</Text>
        <InputContainer>
          <Input
            type="text"
            placeholder=""
            value={textInput}
            onChange={this.onInputChange}
          />
          <SaveButton type="button" onClick={this.onSaveButtonClicked}>
            Save
          </SaveButton>
        </InputContainer>
      </InputAndTextContainer>
    )
  }

  renderEditableText = () => {
    const {textInput} = this.state
    return (
      <InputAndTextContainer>
        <Text>Editable Text Input</Text>
        <InputContainer>
          <EditText>{textInput}</EditText>
          <SaveButton type="button" onClick={this.onEditButtonClicked}>
            Edit
          </SaveButton>
        </InputContainer>
      </InputAndTextContainer>
    )
  }

  render() {
    const {isSaved} = this.state
    return (
      <Container>
        {isSaved ? this.renderEditableText() : this.renderInput()}
      </Container>
    )
  }
}

export default EditableText
