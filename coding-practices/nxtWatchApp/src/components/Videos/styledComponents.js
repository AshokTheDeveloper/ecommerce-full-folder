import Styled from 'styled-components'

import {Link} from 'react-router-dom'

import {IoIosSearch} from 'react-icons/io'

export const Container = Styled.div`
  list-style-type: none;
  padding: 0px;
  padding-left: 24px;
  background-color: ${props => (props.bgColor ? '#010101' : '#f4f4f4')};
  min-height: 100vh;
  padding-top: 32px;
`

export const VideosContainer = Styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const SearchBarContainer = Styled.div`
  display: flex;
  align-items: center;
  width: 50%;;
  border: 1px solid #94a3b8;
  margin-left: 18px;
  margin-bottom: 24px;
  border-radius: 4px;
  @media (max-width: 576px) {
    width: 90%;
  }
`
export const SearchInput = Styled.input`
  background: none;
  border: none;
  outline: none;
  padding: 12px 18px;
  width: 86%;
  border-right: 1px solid #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.color ? '#f4f4f4' : '#1f1f1f')};
 @media (max-width: 576px) {
    padding: 6px 14px;
  }
`
export const SearchButton = Styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 72px;
  font-size: 18px;
  padding: 12px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`
export const LoaderContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
  color: blue;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 24px;
`
export const FailureImage = Styled.img`
  width: 400px;
  margin: 0px;
  margin-bottom: 24px;
  @media (max-width: 576px) {
    width: 200px;
  }
`
export const FailureText = Styled.h1`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 24px;
  font-weight: 500;
  color: ${props => props.color};
  @media (max-width: 576px) {
    font-size: 24px;
    font-weight: 500;
  }
`

export const FailureDescription = Styled.p`
  font-family: 'Roboto';
  text-align: center;
  width: 400px;
  margin-bottom: 16px;
  line-height: 1.8;
  color: ${props => props.color};
  @media (max-width: 576px) {
    width: 300px;
  }
`
export const RetryLik = Styled(Link)`
  text-decoration: none;
`
export const RetryButton = Styled.button`
  border: none;
  background-color: #4f46e5;
  outline: none;
  padding: 8px 24px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
`
export const SearchIcon = Styled(IoIosSearch)`
  color: ${props => props.color};
`
