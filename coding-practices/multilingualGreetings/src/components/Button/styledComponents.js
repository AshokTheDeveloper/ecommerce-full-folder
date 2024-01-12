import Styled from 'styled-components'

export const ButtonContainer = Styled.li`
  list-style-type: none;
  margin: 16px;
`

export const LanguageButton = Styled.button`
  border: none;
  border: 1px solid #db1c48;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  padding: 4px 12px;
  color: ${props => props.color};
  background: ${props => props.bgColor};
`
