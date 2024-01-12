// Style your components here
import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 100vh;
  padding: 32px;
  @media (max-width: 576px) {
    flex-direction: column
  }
`
export const Heading = Styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 36px;
  padding-left: 130px;
`

export const MemeContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
`

export const FormElement = Styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const InputContainer = Styled.div` 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 24px;
`

export const LabelText = Styled.label`
  font-family: 'Roboto';
  color: #5a7184;
  font-size: 14px;
  margin-bottom: 8px;
`

export const InputElement = Styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  color: #5a7184;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  background: none;
  border: none;
  outline: none;
  border: 1px solid #5a7184;
  border-radius: 4px;
  width: 100%;
`
export const SelectElement = Styled.select`
  font-family: 'Roboto';
  font-size: 16px;
  color: #5a7184;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  background: none;
  border: none;
  outline: none;
  border: 1px solid #5a7184;
  border-radius: 4px;
  width: 100%;
`
export const OptionElement = Styled.option`
  font-family: 'Roboto'
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px
  padding-bottom: 8px;
`
export const SubmitButton = Styled.button`
  font-family: 'Roboto';
  background-color: #0b69ff;
  color: #ffffff;
  padding: 12px 24px;
  font-weight: 500px;
  width: 50%;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
`
export const DisplayMemeContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 400px;
  padding: 24px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`
export const MemeText = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  text-align: center;
`
