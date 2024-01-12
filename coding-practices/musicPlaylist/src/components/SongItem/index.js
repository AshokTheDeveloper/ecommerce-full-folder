import {
  Container,
  AlbumContainer,
  Image,
  TextContainer,
  SongTitle,
  Genre,
  DurationContainer,
  Duration,
  DeleteIcon,
  DeleteButton,
} from './styledComponents'

const SongItem = props => {
  const {songDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    deleteSong(id)
  }

  return (
    <Container>
      <AlbumContainer>
        <Image src={imageUrl} alt="track" />
        <TextContainer>
          <SongTitle>{name}</SongTitle>
          <Genre>{genre}</Genre>
        </TextContainer>
      </AlbumContainer>
      <DurationContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <DeleteIcon />
        </DeleteButton>
      </DurationContainer>
    </Container>
  )
}

export default SongItem
