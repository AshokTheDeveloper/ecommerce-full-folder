import Styled from 'styled-components'

import {IoMdSearch} from 'react-icons/io'

export const SingerImageContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100vw;
  padding: 40px;
`
export const SingerName = Styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 16px;
`
export const Designation = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
`
export const SongsContainer = Styled.div`
  min-height: 100vh;
  background-color: #152850;
  padding: 32px;
`
export const HeadingAndSearchbarContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`
export const PlaylistHeading = Styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
`
export const InputContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 4px 24px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
`
export const Input = Styled.input`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  background: none;
  outline: none;
  border: none;
  color: #cbd5e1;
  font-size: 16px;
`
export const SearchIcon = Styled(IoMdSearch)`
  width: 24px;
  height: 24px;
  color: #ffffff;
  margin-left: 24px;
`

export const SongsItemContainer = Styled.ul`
  list-style-type: none;
  min-height: 100vh;
  padding: 0px;
  overflow-y: none;
`

export const NoSongsContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color:  #152850;
`
export const NoSongsHeading = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 36px;
`
