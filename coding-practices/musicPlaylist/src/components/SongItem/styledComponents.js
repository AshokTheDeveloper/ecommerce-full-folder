import Styled from 'styled-components'

import {RiDeleteBinLine} from 'react-icons/ri'

export const Container = Styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-bottom: 24px;
`
export const AlbumContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = Styled.img`
  width: 200px;
  height: 120px;
  margin-right: 8px;
`

export const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
`

export const SongTitle = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  margin-bottom: 16px;
`

export const Genre = Styled(SongTitle)`
  color: #3b82f6;
  margin-bottom: 0px;
`

export const DurationContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`
export const Duration = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  margin-right: 12px;
`

export const DeleteIcon = Styled(RiDeleteBinLine)`
  width: 20px;
  height: 20px;
  color: #ffffff;
`
export const DeleteButton = Styled.button`
  border: none;
  background: none;
  outline: none;
  margin: 0px;
  cursor: pointer;
`
