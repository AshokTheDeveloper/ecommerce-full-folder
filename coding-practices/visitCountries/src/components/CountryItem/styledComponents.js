import Styled from 'styled-components'

export const Container = Styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #334155;
  padding: 8px;
  width: 100%;
`
export const CountryName = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  padding-left: 16px;
`
export const Button = Styled.button`
  width: 64px;
  padding: 8px; 16px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 4px;
`
export const VisitedText = Styled.p`
  font-family: 'Roboto';
  color:  #94a3b8;
  padding-right: 24px;
`
