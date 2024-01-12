// Style your elements here
import Styled from 'styled-components'

export const OptionItem = Styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 8px;
`
export const OptionButton = Styled.button`
  border: none;
  outline: none;
  font-family: 'Roboto';
  color: #334155;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  background-color: #ededed;
  opacity: ${props => (props.isTrue ? 1 : 0.5)};
  width: 120px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`
