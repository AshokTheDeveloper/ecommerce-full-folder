import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`
export const FeaturesSection = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  height: 800px;
  padding-top: 32px;
  @media (max-width: 576px) {
    display: none;
  }
`
export const FeaturesContainer = Styled.div`
  margin: 0px;
`
export const HomeContentSection = Styled.div`
  width: 80%;
  background-color: ${props => (props.bgColor ? 'black' : '#ffffff')};
  @media (max-width: 576px) {
      width: 100%;
  }
`
