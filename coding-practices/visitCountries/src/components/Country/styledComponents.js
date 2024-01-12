import Styled from 'styled-components'

export const Container = Styled.li`
  list-style-type: none;
  margin: 8px;
`
export const CountryImage = Styled.img`
  width: 200px;
  height: 100px;
  margin: 0px;
`

export const ButtonContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items; center;
  background-color: #1f1f2f;
  padding: 8px;
`
export const CountryName = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
export const RemoveButton = Styled.button`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 4px; 12px;
  background: none;
  color: #ffffff;
  cursor: pointer;
`
