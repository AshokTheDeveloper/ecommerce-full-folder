import {Component} from 'react'

import SongItem from '../SongItem'

import {
  SingerImageContainer,
  SingerName,
  Designation,
  SongsContainer,
  HeadingAndSearchbarContainer,
  PlaylistHeading,
  InputContainer,
  Input,
  SearchIcon,
  SongsItemContainer,
  NoSongsContainer,
  NoSongsHeading,
} from './styledComponents'

class MusicPlaylist extends Component {
  constructor(props) {
    super()
    this.state = {
      musicList: props.playList,
      searchInput: '',
    }
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  renderPlaylist = () => {
    const {searchInput} = this.state
    return (
      <SongsContainer>
        <HeadingAndSearchbarContainer>
          <PlaylistHeading>Songs Playlist</PlaylistHeading>
          <InputContainer>
            <Input
              type="search"
              onChange={this.onInputChange}
              value={searchInput}
              placeholder="Search"
            />
            <SearchIcon />
          </InputContainer>
        </HeadingAndSearchbarContainer>
        {this.renderSongs()}
      </SongsContainer>
    )
  }

  renderTopSection = () => (
    <SingerImageContainer>
      <SingerName>Ed Sheeran</SingerName>
      <Designation>Singer</Designation>
    </SingerImageContainer>
  )

  renderSearchedSongs = () => {
    const {musicList, searchInput} = this.state
    const searchedSongs = musicList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchedSongs
  }

  deleteSong = id => {
    const {musicList} = this.state
    const remainingSongs = musicList.filter(eachItem => eachItem.id !== id)
    this.setState({musicList: remainingSongs})
  }

  renderSongs = () => {
    const searchedSongs = this.renderSearchedSongs()
    const lengthOfSongs = searchedSongs.length
    return (
      <>
        {lengthOfSongs === 0 ? (
          this.renderNoSongsFound()
        ) : (
          <SongsItemContainer>
            {searchedSongs.map(eachItem => (
              <SongItem
                key={eachItem.id}
                songDetails={eachItem}
                deleteSong={this.deleteSong}
              />
            ))}
          </SongsItemContainer>
        )}
      </>
    )
  }

  renderNoSongsFound = () => (
    <NoSongsContainer>
      <NoSongsHeading>No Songs Found</NoSongsHeading>
    </NoSongsContainer>
  )

  render() {
    return (
      <>
        {this.renderTopSection()}
        {this.renderPlaylist()}
      </>
    )
  }
}

export default MusicPlaylist
