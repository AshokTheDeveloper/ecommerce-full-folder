import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#272727' : '#ffffff')};
`
export const LoginForm = Styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 460px;
  border-radius: 8px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props => (props.bgColor ? '' : `0px 16px 40px 0px #ebebeb`)};
  padding: 32px;
  @media (max-width: 576px) {
    width: 60%;
    height: 400px;
  }

`

export const Logo = Styled.img`
  width: 160px;
  margin-top: 32px;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    width: 120px;
    margin-top: 32px;
  }
`
export const InputContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 24px;
`
export const Label = Styled.label`
  font-family: 'Roboto';
   color: ${props => (props.color ? '#e2e8f0' : '#475569')};
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 500;
`
export const Input = Styled.input`
  padding: 12px 16px;
  width: 100%;
  border: ${props =>
    props.color ? `1px solid #cbd5e1` : '1px solid  #94a3b8'};
  border-radius: 4px;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  background: none;
  color: ${props => (props.color ? '#ebebeb' : '')};
  @media (max-width: 576px) {
    padding: 8px 12px;
  }
`
export const CheckboxContainer = Styled(InputContainer)`
  flex-direction: row;
  margin-bottom: 32px;
`

export const CheckBox = Styled.input`
  height: 18px;
  width: 18px;
  margin-right: 8px;
`
export const LabelCheckbox = Styled.label`
  font-family: 'Roboto';
  color: ${props => (props.color ? '#e2e8f0' : '#181818')};

  font-size: 14px;
  font-weight: 500;
`
export const LoginButton = Styled.button`
  padding: 12px 16px;
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 4px;
  @media (max-width: 576px) {
    padding: 8px 12px;
  }
`
export const ErrorMsg = Styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
`
