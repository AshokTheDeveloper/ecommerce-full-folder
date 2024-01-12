import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Heading = Styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
`

export const ButtonContainer = Styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const Image = Styled.img`
  width: 320px;
  height: 300px;
  margin-top: 32px;
`
