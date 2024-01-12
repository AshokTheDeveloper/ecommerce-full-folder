import Styled from 'styled-components'

export const ResultViewContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;

  @media (max-width: 576px) {
    width: 70%;
  }
`

export const NormalContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImagesContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const PersonName = Styled.h3`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
export const PlayerImage = Styled.img`
  width: 140px;
  height: 140px;
  margin: 0;

  @media (max-width: 576px) {
   width: 120px;
   height: 120px;
  }
`
export const ResultText = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 28px;
  margin: bottom: 16px;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`
export const PlayAgainButton = Styled.button`
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #000000;
  width: 180px;
  height: 40px;
  font-family: 'Bree Serif';
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 14px;
    width: 140px;
    height: 34px;
  }
`
