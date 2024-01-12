import {
  ResultViewContainer,
  PersonName,
  PlayerImage,
  ResultText,
  PlayAgainButton,
  ImagesContainer,
  NormalContainer,
} from './styledComponents'

const ResultView = props => {
  const {gameStatus, playAgain} = props
  const {person, opponent, result} = gameStatus

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultViewContainer>
      <ImagesContainer>
        <NormalContainer>
          <PersonName>YOU</PersonName>
          <PlayerImage src={person} alt="your choice" />
        </NormalContainer>
        <NormalContainer>
          <PersonName>OPPONENT</PersonName>
          <PlayerImage src={opponent} alt="opponent choice" />
        </NormalContainer>
      </ImagesContainer>
      <NormalContainer>
        <ResultText>{result}</ResultText>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </NormalContainer>
    </ResultViewContainer>
  )
}

export default ResultView
