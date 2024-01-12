import Styled from 'styled-components'

export const Container = Styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 16px;
  @media (max-width: 576px) {
      height: 100vh;
  }
`
export const ScoreBoardContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 120px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  @media (max-width: 576px) {
    height: 100px;
    padding: 24px;
  }
`

export const HeaderLogoContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
`

export const GameTitle = Styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  width: 60px;
  margin: 0;
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 16px;
  }
`

export const ScoreContainer = Styled(HeaderLogoContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  font-weight: 500;
  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
`

export const ScoreText = Styled.p`
  color: #000000;
  margin: 0px;
  font-size: 18px;
  font-family: 'Bree Serif';

`
export const Score = Styled.p`
  color: #000000;
  font-size: 28px;
  font-family: 'Roboto';
  margin: 0px;  
`
export const GameOptionContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 400px;
  margin: auto;
//   border: 1px solid white;
  @media (max-width: 576px) {
    width: 100%;
    height: 220px;
    margin-bottom: 32px;
    margin-top: 120px;
  }  
`
export const PopupContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
  border-radius: 8px;
  margin: auto;
`
export const TriggerButton = Styled.button`
  background-color: #ffffff;
  padding: 8px 24px;
  border-radius: 6px;
  align-self: flex-end;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  font-weight: 500;
  @media (max-width: 576px) {
      margin-top: 32px;
      padding: 6px 12px;
  }
`

export const PopupView = Styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 700px;
   background-color: #ffffff;
   padding: 16px;
   margin-left: auto;
   margin-right: auto;
   @media (max-width: 576px) {
     width: 94%;
   }
`
export const RulesImage = Styled.img`
  width: 90%;
  height: 500px;
  @media (max-width: 576px) {
     height: 90%;
   }
`

export const CloseButton = Styled(TriggerButton)`
`
export const ResultViewContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;
  height: 400px;
  margin: auto;
  @media (max-width: 576px) {
    width: 100%;
  }
`
