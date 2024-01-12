import Styled from 'styled-components'

import {FaGamepad} from 'react-icons/fa'

import {Link} from 'react-router-dom'

export const Container = Styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const LoaderContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`

export const GamingVideosContainer = Styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  background-color: ${props => props.bgColor};
`

export const GamingTopContainer = Styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 24px;
  margin-bottom: 40px;
`
export const GameTopText = Styled.h1`
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
export const GameIcon = Styled(FaGamepad)`
  color: red;
  width: 32px;
  height: 32px;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 24px;
  background-color: ${props => props.bgColor};
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
