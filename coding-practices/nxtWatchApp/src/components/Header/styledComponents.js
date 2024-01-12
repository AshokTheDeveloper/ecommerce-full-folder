import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 40px;
  background-color: ${props => (props.bgColor ? ' #212121' : '#ffffff')};
  @media (max-width: 576px) {
    padding: 24px;
    height: 60px;
  }
`
export const Logo = Styled.img`
  width: 120px;
  margin: 0px;
  @media (max-width: 576px) {
    width: 90px;
    margin: 0px;
  }
`
export const UList = Styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 300px;
  @media (max-width: 576px) {
    display: none;
    width: 220px;
  }
`
export const ListItem = Styled.li`
  list-style-type: none;
`
export const Profile = Styled.img`
  width: 32px;
  margin: 0px;
  @media (max-width: 576px) {
    width: 24px;
    height: 24px;
  }
`
export const LogoutButton = Styled.button`
  color: #3b82f6;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Roboto';
  padding: 4px 24px;
  background: none;
  border: none;
  outline: none;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 576px) {
    width: 80px;
    height: 30px;
    font-size: 14px;
    padding: 4px 12px;
  }
`
export const ModeButton = Styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`

export const MobileNavbarContainer = Styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 160px;
  list-style-type: none;
  @media (min-width: 577px) {
    display: none;
  }
`
export const MobileLogoutButton = Styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #00000099;
  height: 100vh;
  width: 100vw;
`

export const PopupModal = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 24px 32px;
  border-radius: 14px;
`
export const PopupText = Styled.p`
  font-family: 'Roboto';
  margin-bottom: 16px;
`
export const PopupButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PopupButton = Styled.button`
  border: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: ${props => `1px solid ${props.color}`};
  font-family: 'Roboto';
  outline: none;
  padding: 12px;
  width: 80px;
  margin: 8px;
  cursor: pointer;
  font-weight: 500;
`
