// Style your elements here
import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-position: center;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const Heading = Styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 32px;
  @media (max-width: 576px) {
    font-size: 24px;
    text-align: center;
    margin-top: 32px;
  }
`
export const GradientOptionContainer = Styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 32px;
  list-style-type: none;
`

export const Option = Styled.p`
  font-family: 'Roboto';
  color:  #ededed;
  text-align: center;
  margin-top: 24px;
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 18px;
    text-align: center;
  }
`

export const ColorPickerContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const InputContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 300px;
  @media (max-width: 576px) {
    width: 240px;
  }
`

export const SecondaryDescription = Styled(Option)`
  font-size: 18px;
  margin-bottom: 16px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`

export const InputOption = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorInput = Styled.input`
  width: 140px;
  height: 60px;
  border: none;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 576px) {
    width: 100px;
    height: 48px;
  }
`

export const SubmitButton = Styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  padding: 12px 32px;
  margin-top: 32px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`

export const FormElement = Styled.form`
  padding: 8px;
`
