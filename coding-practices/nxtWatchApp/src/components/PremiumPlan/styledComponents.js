import Styled from 'styled-components'

export const Container = Styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 260px;
  width: 100%;
  padding: 24px;
  background-size: cover;
  margin-bottom: 24px;
  display: ${props => props.display};
`
export const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  @media (max-width: 576px) {
      width: 60%;
  }
`
export const PremiumLogo = Styled.img`
  width: 140px;
  margin-bottom: 24px;
  margin-top: 32px;
  @media (max-width: 576px) {
      width: 120px;
  }
`
export const PremiumText = Styled.p`
  font-family: 'Roboto';
  color: #181818;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 1.6;
  }
`
export const PremiumButton = Styled.button`
  padding: 12px 24px;
  font-family: 'Roboto';
  background: none;
  outline: none;
  cursor: pointer;
  color: #313131;
  border: 2px solid  #313131;
  font-weight: 500;
  @media (max-width: 576px) {
    padding: 8px 16px;
  }
`
export const CloseButton = Styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
