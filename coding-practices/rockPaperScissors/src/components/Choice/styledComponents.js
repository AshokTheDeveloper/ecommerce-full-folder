import Styled from 'styled-components'

export const ChoiceContainer = Styled.li`
  list-style-type: none;
  margin: 16px;
  @media (max-width: 576px) {
    margin: 8px;
  }
`
export const ChoiceButton = Styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`

export const ChoiceImage = Styled.img`
  width: 160px;
  height: 160px;
  @media (max-width: 576px) {
    width: 140px;
    height: 140px;
  }
`
