import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 900px;
  list-style-type: none;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  @media (max-width: 576px) {
    display: none;
  }
`

export const FeaturesContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
`
export const Feature = Styled.li`
  list-style-type: none;
  width: 100%;
`

export const IconContainer = Styled.div`
  margin-left: 24px;
  color: ${props => (props.bgColor ? '#909090' : '#383838')};
  color: ${props => (props.color ? '#ff0000' : '')};
  font-size: 24px;
`

export const FeatureName = Styled.p`
  font-family: 'Roboto';
  margin-left: 24px;
  font-weight: ${props => (props.color ? '600' : '400')};
  font-size: 16px;
  color: ${props => (props.colorTwo ? '#e2e8f0' : '#313131')};
`
export const FeatureButton = Styled.button`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`
export const ContactContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
