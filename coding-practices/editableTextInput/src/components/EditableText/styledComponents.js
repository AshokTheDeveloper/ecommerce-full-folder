import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5d0fe;
`
export const InputAndTextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 400px;
  height: 200px;
  border-radius: 8px;
  
`

export const Text = Styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 24px;
  margin-bottom: 32px;
`

export const InputContainer = Styled.div`
  display: flex;
`

export const Input = Styled.input`
  border: 2px solid #cbd2d9;
  padding: 8px;
  outline: none;
  border-radius: 4px;
  color: #323f4b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`
export const SaveButton = Styled.button`
  background-color:  #d946ef;
  padding: 8px;
  width: 60px;
  height: 40px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
`

export const EditText = Styled.p`
  font-family: 'Roboto';
  color: #323f4b;
  width: 80px;
  font-size: 18px;
  margin-right: 32px;
`
