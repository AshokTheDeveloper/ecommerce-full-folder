import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  height: 100vh;
`
export const ResultContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 100vh;
  background-color: #ffc533;
  padding: 32px;
`
export const ResultText = Styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: 600;
  max-width: 400px;
`
export const CharacterCounterContainer = Styled.ul`
  list-style-type: none;
  padding: 0px;

`
export const InputBgContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f172a;
  padding: 24px;
  width: 50%;
  height: 100vh;
`

export const Heading = Styled.h1`
  font-family: 'Roboto';
  color: #ffbf1f;
  padding-top: 24px;
  margin-bottom: 32px;
`

export const Input = Styled.input`
  width: 80%;
  padding: 8px; 16px;
  font-family: 'Roboto';
  color: #334155;
  background: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
`
export const Form = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AddButton = Styled.button`
  background-color:  #ffbf1f;
  padding: 10px 16px;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 60px;
  cursor: pointer;
`
export const ImageContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 80vh;
  width: 100%;
`

export const Image = Styled.img`
  width: 400px;
  height: 300px;
  margin: 0px;
`
export const ListItems = Styled.ul`
  padding: 0px;
`
