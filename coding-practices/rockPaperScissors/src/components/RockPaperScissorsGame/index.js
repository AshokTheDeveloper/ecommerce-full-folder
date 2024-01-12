import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Choice from '../Choice'
import ResultView from '../ResultView'
import './index.css'

import {
  Container,
  ScoreBoardContainer,
  HeaderLogoContainer,
  GameTitle,
  ScoreContainer,
  ScoreText,
  Score,
  GameOptionContainer,
  PopupContainer,
  RulesImage,
  PopupView,
  TriggerButton,
  CloseButton,
  ResultViewContainer,
} from './styledComponents'

class RockPaperScissorsGame extends Component {
  state = {
    gameStatus: {},
    score: 0,
    isOptionChosen: false,
  }

  renderScoreBoard = () => {
    const {score} = this.state
    return (
      <ScoreBoardContainer>
        <HeaderLogoContainer>
          <GameTitle>Rock Paper Scissors</GameTitle>
        </HeaderLogoContainer>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreContainer>
      </ScoreBoardContainer>
    )
  }

  onChooseOption = (personId, personImageUrl) => {
    this.setState({isOptionChosen: true})
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * 3)
    const opponentId = choicesList[randomIndex].id
    let result = ''
    if (personId === opponentId) {
      result = 'IT IS DRAW'
    } else if (
      personId !== opponentId &&
      personId === 'ROCK' &&
      opponentId === 'SCISSORS'
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      result = 'YOU WON'
    } else if (
      personId !== opponentId &&
      personId === 'SCISSORS' &&
      opponentId === 'PAPER'
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      result = 'YOU WON'
    } else if (
      personId !== opponentId &&
      personId === 'PAPER' &&
      opponentId === 'ROCK'
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      result = 'YOU WON'
    } else {
      this.setState(prevState => ({score: prevState.score - 1}))
      result = 'YOU LOSE'
    }
    const opponentChoiceImageUrl = choicesList[randomIndex].imageUrl
    const resultObj = {
      result,
      person: personImageUrl,
      opponent: opponentChoiceImageUrl,
    }
    this.setState({gameStatus: resultObj})
  }

  renderGameOptions = () => {
    const {choicesList} = this.props
    return (
      <GameOptionContainer>
        {choicesList.map(eachChoice => (
          <Choice
            choicesList={eachChoice}
            key={eachChoice.id}
            onChooseOption={this.onChooseOption}
          />
        ))}
      </GameOptionContainer>
    )
  }

  renderRulesPopup = () => (
    <PopupContainer>
      <Popup modal trigger={<TriggerButton type="button">Rules</TriggerButton>}>
        {close => (
          <PopupView>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine className="close-icon" />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupView>
        )}
      </Popup>
    </PopupContainer>
  )

  playAgain = () => {
    this.setState({isOptionChosen: false})
  }

  renderResultView = () => {
    const {gameStatus, isOptionChosen} = this.state
    return (
      <ResultViewContainer>
        {isOptionChosen ? (
          <ResultView gameStatus={gameStatus} playAgain={this.playAgain} />
        ) : (
          this.renderGameOptions()
        )}
      </ResultViewContainer>
    )
  }

  render() {
    return (
      <Container>
        {this.renderScoreBoard()}
        {this.renderResultView()}
        {this.renderRulesPopup()}
      </Container>
    )
  }
}

export default RockPaperScissorsGame
