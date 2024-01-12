import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const NotFoundContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const NotFoundImage = Styled.img`
  width: 400px;
  margin-bottom: 32px;
`
export const NotFoundHeading = Styled.h1`
  font-family: 'Roboto';
  margin-bottom: 24px;
  color: ${props => props.color};
`

export const Description = Styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
`
