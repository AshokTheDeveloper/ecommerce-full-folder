import {Component} from 'react'

import Button from '../Button'

import {Container, Heading, ButtonContainer, Image} from './styledComponents'

class MultilingualGreetings extends Component {
  state = {
    activeLanguage: 'english',
  }

  selectLanguage = language => {
    this.setState({activeLanguage: language})
  }

  renderImage = () => {
    const {activeLanguage} = this.state
    const {languageGreetingsList} = this.props
    const activeImage = languageGreetingsList.find(
      eachItem => eachItem.imageAltText === activeLanguage,
    )
    const {imageUrl, imageAltText} = activeImage
    return <Image src={imageUrl} alt={imageAltText} />
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguage} = this.state
    return (
      <Container>
        <Heading>Multilingual Greetings</Heading>
        <ButtonContainer>
          {languageGreetingsList.map(eachObj => (
            <Button
              key={eachObj.id}
              details={eachObj}
              selectLanguage={this.selectLanguage}
              isTrue={activeLanguage === eachObj.imageAltText}
            />
          ))}
        </ButtonContainer>
        {this.renderImage()}
      </Container>
    )
  }
}

export default MultilingualGreetings
