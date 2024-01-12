import Styled from 'styled-components'

import {RiPlayListAddFill} from 'react-icons/ri'

export const Container = Styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const SavedVideoTopContainer = Styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 24px;
`
export const SaveTopText = Styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  color: ${props => props.color};
  font-weight: 500;
`
export const IconContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
  margin-right: 16px;
`
export const SaveIcon = Styled(RiPlayListAddFill)`
  color: red;
  width: 32px;
  height: 32px;
`
export const SavedVideosContainer = Styled.div`
  padding: 0px;
  width: 80%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const SavedVideoItemsContainer = Styled.ul`
  list-style-type: none;
`
